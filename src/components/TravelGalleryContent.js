import React from "react";
import unfile from "../functions/unfile";
import scroll from "../functions/scroll";

export default function TravelGalleryContent() {
    return (
        <section id="travelgallery">
            <div className="JP15">
                <header className="filedivider" onClick={unfile.bind(null, ".JP15")}>Japan 2015</header>
                <div onClick={scroll.bind(null, "JP", "prevJP", "nextJP")} className="prev" id="prevJP">
                    <p className="prev1"></p>
                    <p className="prev2"></p>
                </div>
                    <div id="JP" className="album">
                        <span><img src="./publicimages/Japan 2015/photo_3_2023-07-07_16-16-03.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Japan 2015/photo_5_2023-07-07_16-16-03.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Japan 2015/photo_1_2023-07-07_16-16-03.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Japan 2015/photo_2_2023-07-07_16-16-03.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Japan 2015/photo_4_2023-07-07_16-16-03.jpg" alt="Not Found"/></span>
                        
                    </div>
                <div onClick={scroll.bind(null, "JP", "prevJP", "nextJP")} className="next" id="nextJP">
                    <p className="next1"></p>
                    <p className="next2"></p>
                </div>
            </div>
            
            <div className="TW17">
                <header className="filedivider" onClick={unfile.bind(null, ".TW17")}>Taiwan 2017</header>
                <div onClick={scroll.bind(null, "TW", "prevTW", "nextTW")} className="prev" id="prevTW">
                    <p className="prev1"></p>
                    <p className="prev2"></p>
                </div>
                    <div id="TW" className="album">
                        <span><img src="./publicimages/Taiwan 2017/photo_3_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_7_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_1_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_2_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_4_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_5_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_6_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_8_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_9_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_10_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_11_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_12_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_13_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_14_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_15_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Taiwan 2017/photo_16_2023-07-08_19-30-06.jpg" alt="Not Found"/></span>
                    </div>
                <div onClick={scroll.bind(null, "TW", "prevTW", "nextTW")} className="next" id="nextTW">
                    <p className="next1"></p>
                    <p className="next2"></p>
                </div>
            </div>
            
            <div className="TH18">
                <header className="filedivider" onClick={unfile.bind(null, ".TH18")}>Thailand 2018</header>
                <div onClick={scroll.bind(null, "TH", "prevTH", "nextTH")} className="prev" id="prevTH">
                    <p className="prev1"></p>
                    <p className="prev2"></p>
                </div>
                    <div id="TH" className="album">
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_9_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_8_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_1_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_2_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_3_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_4_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_5_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_6_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_7_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Krabi, Thailand 2018/photo_10_2023-07-08_22-08-57.jpg" alt="Not Found"/></span>
                    </div>
                <div onClick={scroll.bind(null, "TH", "prevTH", "nextTH")} className="next" id="nextTH">
                    <p className="next1"></p>
                    <p className="next2"></p>
                </div>
            </div>

            <div className="NZ18">
                <header className="filedivider" onClick={unfile.bind(null, ".NZ18")}>New Zealand 2018</header>
                <div onClick={scroll.bind(null, "NZ", "prevNZ", "nextNZ")} className="prev" id="prevNZ">
                    <p className="prev1"></p>
                    <p className="prev2"></p>
                </div>
                    <div id="NZ" className="album">
                        <span><img src="./publicimages/New Zealand 2018/photo_20_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_14_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_1_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_2_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_3_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_5_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_7_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_8_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_9_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_10_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_11_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_12_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_15_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_16_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_17_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_18_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_19_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/New Zealand 2018/photo_21_2023-07-07_16-24-45.jpg" alt="Not Found"/></span>
                    </div>
                <div onClick={scroll.bind(null, "NZ", "prevNZ", "nextNZ")} className="next" id="nextNZ">
                    <p className="next1"></p>
                    <p className="next2"></p>
                </div>
            </div>
            
            <div className="IN22">
                <header className="filedivider" onClick={unfile.bind(null, ".IN22")}>Indonesia 2022</header>
                <div onClick={scroll.bind(null, "IN", "prevIN", "nextIN")} className="prev" id="prevIN">
                    <p className="prev1"></p>
                    <p className="prev2"></p>
                </div>
                    <div id="IN" className="album">
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_6_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_5_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_4_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_1_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_2_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_3_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_7_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_8_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_9_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_10_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_11_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_12_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_13_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_14_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_15_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_16_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_17_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_18_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_19_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                        <span><img src="./publicimages/Bandung, Indonesia 2022/photo_20_2023-07-08_21-53-09.jpg" alt="Not Found"/></span>
                    </div>
                <div onClick={scroll.bind(null, "IN", "prevIN", "nextIN")} className="next" id="nextIN">
                    <p className="next1"></p>
                    <p className="next2"></p>
                </div>
        </div>
    </section>
    )
}