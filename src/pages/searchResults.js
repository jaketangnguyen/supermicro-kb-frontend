import React from "react";
import SidebarCheckbox from "./SidebarCheckbox";
import API from "../services/API";
import SearchInput from "./SearchInput";
import "../style.css";

const CATEGORIES = [
    "Questions & Answers",
    "Articles",
    "Others"
]

const COMPONENTS = [
    "System",
    "CPU",
    "Memory",
    "Storage",
    "GPU",
    "AOC Storage",
    "AOC Networking",
    "SIOM/AIOM",
    "Accessories",
    "Add-On Part",
    "Power Supply"
]

const ISSUETYPE = [
    "Product Compatibility",
    "Product Information",
    "RAID"
]

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            categories: CATEGORIES,
            components: COMPONENTS,
            issues: ISSUETYPE,
            entries: [],
            allEntries: [],
            filters: new Set(),
            currentPage: 1,
            entriesPerPage: 10,
            keywords: []
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        const windowUrl = window.location.search;
        this.query = new URLSearchParams(windowUrl).get("query");
        console.log("Check the query value:" + this.query);
    }

    componentDidMount() {
        console.log("Component did mount");
        console.log("Print out query: " + this.query);
        const api = new API();

        /**/
        api.getKeywords().then((response) => {
            console.log(response.data);
            this.setState({ keywords: response.data.map(({ subject }) => subject) });
        }).catch((err) => console.log(err));
        
        api.getEntries(this.query).then((response) => {
            console.log(response.data);
            this.setState({ entries: response.data, allEntries: response.data });
            console.log("Time to check the entries: " + this.state.entries);
            console.log(this.state);
        }).catch((err) => console.log(err));
    }

    handleFilterChange(e) {
        this.setState(previousState => {
            let fil = new Set(previousState.filters);
            let ent = this.state.entries;
            if (e.target.checked) {
                fil.add(e.target.value);
            } else {
                fil.delete(e.target.value);
            }
            if (fil.size) {
                ent = ent.filter(entry => {
                    let tags = new Set();
                    let isFound = false;
                    for(let[tag, tag_properties] of Object.entries(entry.tag)){
                            tags.add(tag_properties.tag_name);
                    }
                    for(var tag of tags){
                            if(fil.has(tag)){
                                    isFound = true;
                                    break;
                            }
                    }
                        return fil.has(entry.category) || isFound;
                })
            } else {
                ent = this.state.allEntries;
            }
            return { entries: ent, filters: fil }
        });
    }


    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { entries, currentPage, entriesPerPage } = this.state;

        // Logic for displaying current entries
        const indexOfLastEntry = currentPage * entriesPerPage;
        const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
        const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(entries.length / entriesPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <div>
                    <SidebarCheckbox categories={this.state.categories} components={this.state.components} issues={this.state.issues} onFilterChange={this.handleFilterChange} />
                </div>
                <div>
                    <SearchInput autoCompleteDate={this.state.keywords} />
                </div>

                <div class="page_body">
                    <div class="result_container">
                        <div class="resultsSpace">
                            {
                                currentEntries.map((entry, index) => (
                                    <div class="result">
                                        <h2>{entry.subject}</h2>
                                        <a href={entry.url}>{entry.url}</a>
                                        <p>{entry.explanation}</p>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>

                        <div class="pagination">
                            {
                                pageNumbers.map(number => (
                                    <button class="page-button" onClick={() => this.handlePageChange(number)}>{number}</button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;


