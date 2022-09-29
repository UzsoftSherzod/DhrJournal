import React from "react";

class Map extends React.Component {
    render() {
        return (
            <div className="map">
                <div style={{position: "relative", overflow: "hidden"}}>
                    <a href="https://yandex.uz/maps/org/52452172302/?utm_medium=mapframe&utm_source=maps"
                       style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0"}}>
                        Inson huquqlari bo'yicha O'zbekiston Respublikasi milliy markazi</a>
                    <a href="https://yandex.uz/maps/10335/tashkent/category/legal_services/184105630/?utm_medium=mapframe&utm_source=maps"
                       style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Yuridik xizmatlar
                        Toshkentda</a>
                    <iframe src="https://yandex.uz/map-widget/v1/-/CCUQZVtSxA" width="100%" height="500px" frameBorder="1"
                            allowFullScreen="" style={{position: "relative"}}/>
                </div>
            </div>
        )
    }
}

export default Map;