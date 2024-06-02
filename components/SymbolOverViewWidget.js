"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef();

    useEffect(() => {
        const containerElement = container.current;

        // Script elementini oluştur
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
      {
        "symbols": [
            [
                "BINANCE:BTCUSD|1D"
            ],
            [
                "BINANCE:ETHUSD|1D"
            ],
            [
                "TVC:GOLD|1D"
            ],            
            [
                "Apple",
                "AAPL|1D"
            ],
            [
                "Microsoft",
                "MSFT|1D"
            ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "dark",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;

        // Script elementini container'a ekle
        containerElement.appendChild(script);

        // Cleanup function: container içindeki script elementini kaldır
        return () => {
            containerElement.removeChild(script);
        };
    }, []);

    return (
        <div className=' h-96'>
            <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright">
               
                </div>
            </div>
        </div>

    );
}

export default memo(TradingViewWidget);
