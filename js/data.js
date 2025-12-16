// ============ PATH CONFIG ============
// If your current HTML uses "../wavs/...", keep "../wavs".
// If index.html is in project root and wavs is also in root, use "./wavs".
const BASE_PATH = "../wavs";

// Methods (columns) - keep consistent across all sections
const METHODS = [
  { key: "Narrowband", label: "Narrowband" },
  { key: "Wideband",  label: "Wideband"  },
  { key: "UDM+",      label: "UDM+"      },
  { key: "FLowHigh",  label: "FLowHigh"  },
  { key: "NVSR",      label: "NVSR"      },
  { key: "AP-BWE",    label: "AP-BWE"    },
  { key: "mdctGAN",   label: "mdctGAN"   },
  { key: "StreamBWE", label: "StreamBWE" },
];

// Sections + sample keys (file stem without extension)
const SECTIONS = [
  {
    id: "8kto16k",
    title: "I. 8 kHz to 16 kHz",
    dir: "8kto16k",
    samples: ["p362_225", "p363_350", "p374_420", "s5_115", "s5_130"],
  },
  {
    id: "4kto16k",
    title: "II. 4 kHz to 16 kHz",
    dir: "4kto16k",
    samples: ["p360_152", "p361_093", "p361_148", "p362_216", "p374_283"],
  },
  {
    id: "2kto16k",
    title: "III. 2 kHz to 16 kHz",
    dir: "2kto16k",
    samples: ["p361_158", "p363_209", "p364_164", "p376_299", "s5_334"],
  },
  {
    id: "24kto48k",
    title: "IV. 24 kHz to 48 kHz",
    dir: "24kto48k",
    samples: ["p361_259", "p362_075", "p362_121", "p362_225", "p362_345"],
  },
  {
    id: "16kto48k",
    title: "V. 16 kHz to 48 kHz",
    dir: "16kto48k",
    samples: ["p362_069", "p362_112", "p362_115", "p362_121", "p363_131"],
  },
  {
    id: "12kto48k",
    title: "VI. 12 kHz to 48 kHz",
    dir: "12kto48k",
    samples: ["p362_121", "p362_129", "p362_175", "p362_362", "s5_131"],
  },
  {
    id: "8kto48k",
    title: "VII. 8 kHz to 48 kHz",
    dir: "8kto48k",
    // 你原文后面还没贴完，我先按常见格式给 5 个占位；
    // 你把真实 sample key 填进来即可
    samples: ["p361_318", "p362_100", "p362_117", "p362_225", "p362_345"],
  },
];
