import React from "react"

export default function Footer() {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Supermicro is a global technology leader committed to delivering first to market innovation for Enterprise, Cloud, AI, and 5G Telco/Edge IT Infrastructure. We are transforming into a Total IT Solutions provider with environmentally-friendly and energy-saving server, AI, storage, IoT, and switch systems, software, and services while delivering advanced high-volume motherboard, power, and chassis products.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Resources</h6>
                        <ul class="footer-links">
                            <li><a href="#">Command Center</a></li>
                            <li><a href="#">E-store</a></li>
                            <li><a href="#">Common Questions</a></li>
                            <li><a href="#">Product Families</a></li>
                            <li><a href="#">Component Support</a></li>
                            <li><a href="#">Templates</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                            <a href="#"> Supermicro</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}