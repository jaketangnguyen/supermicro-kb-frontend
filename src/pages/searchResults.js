import React from "react"

import Search from "./Search";
import SidebarCheckbox from "./SidebarCheckbox";

const CATEGORIES = [
    "Questions & Answers",
    "Articles",
    "Others",
    "System",
    "CPU",
    "Memory", 
    "Storage",
    "AOC",
    "GPU", 
    "Network", 
    "Storage Controller" 

]

const ENTRIES = [
    {
        "id": 1,
        "title": "Questions & Answers title 1", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Questions & Answers"
    },
    {
        "id": 2,
        "title": "Questions & Answers title 2", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Questions & Answers"
    },
    {
        "id": 3,
        "title": "Questions & Answers title 3", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Questions & Answers"
    },
    {
        "id": 4,
        "title": "Article title 1", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Articles"
    },
    {
        "id": 5,
        "title": "Article title 2", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Articles"
    },
    {
        "id": 6,
        "title": "Article title 3", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Articles"
    },
    {
        "id": 7,
        "title": "Others title 1", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Others"
    },
    {
        "id": 8,
        "title": "Others title 2", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Others"
    },
    {
        "id": 9,
        "title": "Others title 3", url: "https://Qnaplaceholder.com",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit.",
        "category": "Others"
    },
];

class SearchResults extends React.Component {

    constructor(props) {
        super(props);

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.state = { categories: CATEGORIES, entries: ENTRIES, filters: new Set() };
    }

    handleFilterChange(e) {
        console.log('The checkbox was toggled');
        console.log(e.target);
        this.setState(previousState => {
            let fil = new Set(previousState.filters);
            let ent = ENTRIES;
            console.log("current ent: ");
            console.log(ent);
            if (e.target.checked) {
                fil.add(e.target.value);
            } else {
                fil.delete(e.target.value);
            }
            console.log("current filter: ");
            console.log(fil);
            if (fil.size) {
                ent = ent.filter(entry => {
                    return fil.has(entry.category);
                })
            }
            return { entries: ent, filters: fil }
        });
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <div>
                    <SidebarCheckbox categories={this.state.categories} onFilterChange={this.handleFilterChange} />
                </div>
                <div>
                    <div>
                        <Search />
                    </div>

                    <div class="container">
                        <div class="resultsSpace">
                            {
                                this.state.entries.map((entry, index) => (
                                    <div class="result">
                                        <h2>{entry.title}</h2>
                                        <hr />
                                        <a href={entry.url}>{entry.url}</a>
                                        <p>{entry.body}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }

}

export default SearchResults


