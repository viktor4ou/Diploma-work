let shopItemsData = [
  {
    id: "intel_i3_12100f",
    name: "Intel Core i3-12100F",
    price: 229,
    desc: `<i class="bi bi-check-lg"></i> 4 ядра / 8 нишки
    <br><i class="bi bi-check-lg"></i> 3.30 - 4.30 GHz
    <br><i class="bi bi-check-lg"></i> 15MB кеш `,
    img: "../img/CPU/intel_core_i312100f.jpg",
  },
  {
    id: "ryzen_5_3600",
    name: "AMD Ryzen 5 3600",
    price: 229,
    desc: `
    <i class="bi bi-check-lg"></i> 4 ядра / 12 нишки
    <br><i class="bi bi-check-lg"></i> 3.60 - 4.20 GHz
    <br><i class="bi bi-check-lg"></i> 32MB L3 кеш 
    `,
    img: "../../img/CPU/amd_ryzen_5_3600.jpg",
  },
  {
    id: "intel_i5_10400f",
    name: "Intel Core i5-10400F",
    price: 239,
    desc1:`<i class="bi bi-check-lg"></i> 6 ядра / 12 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 2.90 - 4.30 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 12MB кеш `,
    img: "../../img/CPU/intel_core_i510400f.jpg",
  },
  {
    id: "ryzen_5_5600",
    name: "AMD Ryzen 5 5600",
    price: 299,
    desc1:`<i class="bi bi-check-lg"></i> 6 ядра / 12 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.50 - 4.40 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 32MB L3 кеш `,
    img: "../../img/CPU/amd_ryzen_5_5600.jpg",
  },
  {
    id: "ryzen_7_5700x",
    name: "AMD Ryzen 7 5700X",
    price: 479,
    desc1:`<i class="bi bi-check-lg"></i> 8 ядра / 16 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.40 - 4.60 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 32MB L3 кеш `,
    img: "../../img/CPU/amd_ryzen_7_5700x.jpg",
  },
  {
    id: "intel_i5_11600kf",
    name: "Intel Core i5-11600KF",
    price: 509,
    desc1:`<i class="bi bi-check-lg"></i> 6 ядра / 12 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.90 - 4.90 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 12 MB Smart Cache `,
    img: "../../img/CPU/Intel Core i5-11600KF.jpg",
  },
  {
    id: "ryzen_5_7600x",
    name: "AMD Ryzen 5 7600X",
    price: 599,
    desc1:`<i class="bi bi-check-lg"></i> 6 ядра / 12 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 4.70 - 5.30 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 32MB L3 кеш `,
    img: "../../img/CPU/amd_ryzen_5_7600x.png",
  },
  {
    id: "intel_i5_12600kf",
    name: "Intel Core i5-12600KF",
    price: 629,
    desc1:`<i class="bi bi-check-lg"></i> 8 ядра / 16 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.70 - 4.90 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 20 MB Intel `,
    img: "../../img/CPU/intel_core_i512600kf.jpg",
  },
  {
    id: "ryzen_9_5950x",
    name: "AMD Ryzen 9 5950X",
    price: 1169,
    desc1:`<i class="bi bi-check-lg"></i> 16 ядра / 32 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.40 - 4.90 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 64MB L3 кеш `,
    img: "../../img/Top Products/amd_ryzen_9_5950x.jpg",
  },
  {
    id: "intel_i9_12900ks",
    name: "Intel Core i9-12900KS",
    price: 1499,
    desc1:`<i class="bi bi-check-lg"></i> 16 ядра / 24 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.20 - 5.50 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 32 MB Intel `,
    img: "../../img/Top Products/intel_core_i912900ks.jpg",
  },
  {
    id: "intel_i5_13600kf",
    name: "Intel Core i5-13600KF",
    price: 666,
    desc1:`<i class="bi bi-check-lg"></i> 16 ядра / 20 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 2.60 - 5.10 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 24 MB Intel`,
    img: "../../img/CPU/intel_core_i513600kf.jpg",
  },
  {
    id: "intel_i7_13700kf",
    name: "Intel Core i7-13700KF",
    price: 929,
    desc1:`<i class="bi bi-check-lg"></i> 16 ядра / 24 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.40 - 5.40 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 30 MB Intel `,
    img: "../../img/CPU/intel_core_i713700kf.png",
  },
  {
    id: "intel_i7_13700k",
    name: "Intel Core i7-13700K",
    price: 949,
    desc1:`<i class="bi bi-check-lg"></i> 16 ядра / 24 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 3.40 - 5.40 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 30 MB Intel `,
    img: "../../img/CPU/intel_core_i713700k.png",
  },
  {
    id: "intel_i9_12900kf",
    name: "Intel Core i9-12900KF",
    price: 1119,
    desc1:`<i class="bi bi-check-lg"></i> 24 ядра / 32 нишки`,
    desc2:`<i class="bi bi-check-lg"></i> 5.20 GHz`,
    desc3:`<i class="bi bi-check-lg"></i> 30 MB Intel Smart `,
    img: "../../img/CPU/intel_core_i912900kf.jpg",
  },
  {
    id: "rtx_3050",
    name: "GeForce RTX 3050",
    price: 639,
    desc1:`<i class="bi bi-check-lg"></i> 8GB GDDR6`,
    desc2:`<i class="bi bi-check-lg"></i> 128-bit`,
    desc3:`<i class="bi bi-check-lg"></i> 3x DisplayPort`,
    img: "../../img/GPU/rtx_3050.png",
  },
  {
    id: "rx_6600",
    name: "ASRock Radeon RX 6600",
    price: 547,
    desc1:`<i class="bi bi-check-lg"></i> 8GB GDDR6`,
    desc2:`<i class="bi bi-check-lg"></i> 128-bit`,
    desc3:`<i class="bi bi-check-lg"></i> 1x DisplayPort`,
    img: "../../img/GPU/rx_6600.png",
  },
  {
    id: "rx_6700",
    name: "ASRock Radeon RX 6700",
    price: 1009,
    desc1:`<i class="bi bi-check-lg"></i> 12GB GDDR6`,
    desc2:`<i class="bi bi-check-lg"></i> 192-bit`,
    desc3:`<i class="bi bi-check-lg"></i> 1x DisplayPort`,
    img: "../../img/GPU/rx_6700_xt.png",
  },
];
