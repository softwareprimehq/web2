
var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
}).pop();
if (segment === 'binance-clone' || segment === 'opensea-clone' || segment === 'nft-marketplace-development' ||
    segment === 'cryptocurrency-exchange-script' || segment === 'paxful-clone' || segment === 'remitano-clone' ||
    segment === 'coinbase-clone' || segment === 'pancakeswap-clone' || segment === 'sushiswap-clone' || segment ===
    'uniswap-clone' || segment === 'decentralized-exchange-script' || segment === 'white-label-nft-marketplace' ||
    segment === 'trust-wallet-clone' || segment === 'rarible-clone' || segment === 'metamask-wallet-clone') {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/64c9e3a7cc26a871b02cb774/1h6qa2ht8';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
}
if (segment === 'offer-zone') {
    window.Tawk_API.onLoad = function () {
        window.Tawk_API.hideWidget();
    };
}
