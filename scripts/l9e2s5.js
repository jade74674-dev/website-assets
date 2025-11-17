(function injectDynamicImages() {
  const imageConfigs = [
    {
      alt: "AAVE Logo",
      match: ["dapp-aave", "LD6pVN0L", "ccRmmKmq", "JWbyc1bm"],
      src: "https://i.ibb.co/JWbyc1bm/dapp-aave-480w.png",
      srcset: [
        "https://i.ibb.co/LD6pVN0L/dapp-aave-120w.png 120w",
        "https://i.ibb.co/ccRmmKmq/dapp-aave-240w.png 240w",
        "https://i.ibb.co/JWbyc1bm/dapp-aave-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    },
    {
      alt: "Axie Infinity Logo",
      match: ["dapp-axieinfinity", "gbvm6t5J", "C3Fj7KwC", "JWcvHFMb"],
      src: "https://i.ibb.co/JWcvHFMb/dapp-axieinfinity-480w.png",
      srcset: [
        "https://i.ibb.co/gbvm6t5J/dapp-axieinfinity-120w.png 120w",
        "https://i.ibb.co/C3Fj7KwC/dapp-axieinfinity-240w.png 240w",
        "https://i.ibb.co/JWcvHFMb/dapp-axieinfinity-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    },
    {
      alt: "Compound logo",
      match: ["dapp-compound", "RkTwLL8b", "35f53WRv", "xKwPJF63"],
      src: "https://i.ibb.co/xKwPJF63/dapp-compound-480w.png",
      srcset: [
        "https://i.ibb.co/RkTwLL8b/dapp-compound-120w.png 120w",
        "https://i.ibb.co/35f53WRv/dapp-compound-240w.png 240w",
        "https://i.ibb.co/xKwPJF63/dapp-compound-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    },
    {
      alt: "Gitcoin logo",
      match: ["dapp-gitcoin", "LDZ0Mzy3", "TyMfC6J", "BHzVhRB1"],
      src: "https://i.ibb.co/BHzVhRB1/dapp-gitcoin-480w.png",
      srcset: [
        "https://i.ibb.co/LDZ0Mzy3/dapp-gitcoin-120w.png 120w",
        "https://i.ibb.co/TyMfC6J/dapp-gitcoin-240w.png 240w",
        "https://i.ibb.co/BHzVhRB1/dapp-gitcoin-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    },
    {
      alt: "Maker logo",
      match: ["dapp-maker", "7tDf3wkz", "QLyB6Qh", "0jXHYvs1"],
      src: "https://i.ibb.co/0jXHYvs1/dapp-maker-480w.png",
      srcset: [
        "https://i.ibb.co/7tDf3wkz/dapp-maker-120w.png 120w",
        "https://i.ibb.co/QLyB6Qh/dapp-maker-240w.png 240w",
        "https://i.ibb.co/0jXHYvs1/dapp-maker-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    },
    {
      alt: "OpenSea Logo",
      match: ["dapp-opensea", "jPwfQd7q", "Fbv7gHqs", "gF4pHLrM"],
      src: "https://i.ibb.co/gF4pHLrM/dapp-opensea-480w.png",
      srcset: [
        "https://i.ibb.co/jPwfQd7q/dapp-opensea-120w.png 120w",
        "https://i.ibb.co/Fbv7gHqs/dapp-opensea-240w.png 240w",
        "https://i.ibb.co/gF4pHLrM/dapp-opensea-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    },
    {
      alt: "Rarible Logo",
      match: ["dapp-rarible", "5gFVTYjL", "TMNmW5Mg", "Kzj16wpR"],
      src: "https://i.ibb.co/Kzj16wpR/dapp-rarible-480w.png",
      srcset: [
        "https://i.ibb.co/5gFVTYjL/dapp-rarible-120w.png 120w",
        "https://i.ibb.co/TMNmW5Mg/dapp-rarible-240w.png 240w",
        "https://i.ibb.co/Kzj16wpR/dapp-rarible-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    },
    {
      alt: "Uniswap Logo",
      match: ["dapp-uniswap", "csGR43j", "PsPyQW5p", "gbk1N9CJ"],
      src: "https://i.ibb.co/gbk1N9CJ/dapp-uniswap-480w.png",
      srcset: [
        "https://i.ibb.co/csGR43j/dapp-uniswap-120w.png 120w",
        "https://i.ibb.co/PsPyQW5p/dapp-uniswap-240w.png 240w",
        "https://i.ibb.co/gbk1N9CJ/dapp-uniswap-480w.png 480w"
      ].join(', '),
      width: 480,
      height: 480
    }
  ];

  function updateImages() {
    imageConfigs.forEach(config => {
      const img = Array.from(document.querySelectorAll(`img[alt="${config.alt}"]`))
        .find(el => config.match.some(m => el.src.includes(m)));
      if (!img) return;
      const picture = img.closest('picture');
      if (!picture) return;
      Array.from(picture.querySelectorAll('source')).forEach(source => source.remove());
      img.src = config.src;
      img.srcset = config.srcset;
      img.sizes = "(min-width: 480px) 480px, 100vw";
      img.width = config.width;
      img.height = config.height;
    });
  }

  function runUpdate() {
    updateImages();
    const observer = new MutationObserver(updateImages);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runUpdate);
  } else {
    runUpdate();
  }
})();