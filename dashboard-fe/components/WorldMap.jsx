"use client";

const WorldMap = () => {
    return (
        <div className="flex justify-center items-center p-4" style={{ width: '100%', height: '40vh' }}>
            <iframe
                src="map.html"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="World Map"
            ></iframe>
        </div>
    );
};

export default WorldMap;
