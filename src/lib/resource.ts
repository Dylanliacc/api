export interface DeviceHardware {
  hwModel: number;
  hwModelSlug: string;
  platformioTarget: string;
  architecture: string;
  activelySupported: boolean;
  displayName: string;
}

export const deviceHardwareList: DeviceHardware[] = [
  {
    hwModel: 1,
    hwModelSlug: "TLORA_V2",
    platformioTarget: "tlora-v2",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-LoRa V2",
  },
  {
    hwModel: 2,
    hwModelSlug: "TLORA_V1",
    platformioTarget: "tlora-v1",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-LoRa V1",
  },
  {
    hwModel: 3,
    hwModelSlug: "TLORA_V2_1_1P6",
    platformioTarget: "tlora-v2-1-1_6",
    architecture: "esp32",
    activelySupported: true,
    displayName: "LILYGO T-LoRa V2.1-1.6",
  },
  {
    hwModel: 4,
    hwModelSlug: "TBEAM",
    platformioTarget: "tbeam",
    architecture: "esp32",
    activelySupported: true,
    displayName: "LILYGO T-Beam",
  },
  {
    hwModel: 5,
    hwModelSlug: "HELTEC_V2_0",
    platformioTarget: "heltec-v2_0",
    architecture: "esp32",
    activelySupported: false,
    displayName: "Heltec V2.0",
  },
  {
    hwModel: 6,
    hwModelSlug: "TBEAM_V0P7",
    platformioTarget: "tbeam0_7",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-Beam V0.7",
  },
  {
    hwModel: 7,
    hwModelSlug: "T_ECHO",
    platformioTarget: "t-echo",
    architecture: "nrf52840",
    activelySupported: true,
    displayName: "LILYGO T-Echo",
  },
  {
    hwModel: 8,
    hwModelSlug: "TLORA_V1_1P3",
    platformioTarget: "tlora-v1_3",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-LoRa V1.1-1.3",
  },
  {
    hwModel: 9,
    hwModelSlug: "RAK4631",
    platformioTarget: "rak4631",
    architecture: "nrf52840",
    activelySupported: true,
    displayName: "RAK WisBlock 4631",
  },
  {
    hwModel: 10,
    hwModelSlug: "HELTEC_V2_1",
    platformioTarget: "heltec-v2_1",
    architecture: "esp32",
    activelySupported: false,
    displayName: "Heltec V2.1",
  },
  {
    hwModel: 11,
    hwModelSlug: "HELTEC_V1",
    platformioTarget: "heltec-v1",
    architecture: "esp32",
    activelySupported: false,
    displayName: "Heltec V1",
  },
  {
    hwModel: 12,
    hwModelSlug: "TBEAM_S3_CORE",
    platformioTarget: "tbeam-s3-core",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "LILYGO T-Beam S3 Core",
  },
  {
    hwModel: 13,
    hwModelSlug: "RAK11200",
    platformioTarget: "rak11200",
    architecture: "esp32",
    activelySupported: false,
    displayName: "RAK WisBlock 11200",
  },
  {
    hwModel: 14,
    hwModelSlug: "NANO_G1",
    platformioTarget: "nano-g1",
    architecture: "esp32",
    activelySupported: true,
    displayName: "Nano G1",
  },
  {
    hwModel: 15,
    hwModelSlug: "TLORA_V2_1_1P8",
    platformioTarget: "tlora-v2-1-1_8",
    architecture: "esp32",
    activelySupported: true,
    displayName: "LILYGO T-LoRa V2.1-1.8",
  },
  {
    hwModel: 16,
    hwModelSlug: "TLORA_T3_S3",
    platformioTarget: "tlora-t3s3-v1",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "LILYGO T-LoRa T3-S3",
  },
  {
    hwModel: 16,
    hwModelSlug: "TLORA_T3_S3",
    platformioTarget: "tlora-t3s3-epaper",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "LILYGO T-LoRa T3-S3 E-Paper",
  },
  {
    hwModel: 17,
    hwModelSlug: "NANO_G1_EXPLORER",
    platformioTarget: "nano-g1-explorer",
    architecture: "esp32",
    activelySupported: true,
    displayName: "Nano G1 Explorer",
  },
  {
    hwModel: 18,
    hwModelSlug: "NANO_G2_ULTRA",
    platformioTarget: "nano-g2-ultra",
    architecture: "nrf52840",
    activelySupported: true,
    displayName: "Nano G2 Ultra",
  },
  {
    hwModel: 21,
    hwModelSlug: "WIO_WM1110",
    platformioTarget: "wio-tracker-wm1110",
    architecture: "nrf52840",
    activelySupported: true,
    displayName: "Seeed Wio WM1110 Tracker",
  },
  {
    hwModel: 25,
    hwModelSlug: "STATION_G1",
    platformioTarget: "station-g1",
    architecture: "esp32",
    activelySupported: true,
    displayName: "Station G1",
  },
  {
    hwModel: 26,
    hwModelSlug: "RAK11310",
    platformioTarget: "rak11310",
    architecture: "rp2040",
    activelySupported: true,
    displayName: "RAK WisBlock 11310",
  },
  {
    hwModel: 29,
    hwModelSlug: "CANARYONE",
    platformioTarget: "canaryone",
    architecture: "nrf52840",
    activelySupported: true,
    displayName: "Canary One",
  },
  {
    hwModel: 30,
    hwModelSlug: "RP2040_LORA",
    platformioTarget: "rp2040-lora",
    architecture: "rp2040",
    activelySupported: true,
    displayName: "RP2040 LoRa",
  },
  {
    hwModel: 31,
    hwModelSlug: "STATION_G2",
    platformioTarget: "station-g2",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Station G2",
  },
  {
    hwModel: 39,
    hwModelSlug: "DIY_V1",
    platformioTarget: "meshtastic-diy-v1",
    architecture: "esp32",
    activelySupported: true,
    displayName: "DIY V1",
  },
  {
    hwModel: 39,
    hwModelSlug: "HYDRA",
    platformioTarget: "hydra",
    architecture: "esp32",
    activelySupported: true,
    displayName: "Hydra",
  },
  {
    hwModel: 41,
    hwModelSlug: "DR_DEV",
    platformioTarget: "meshtastic-dr-dev",
    architecture: "esp32",
    activelySupported: false,
    displayName: "DR-DEV",
  },
  {
    hwModel: 42,
    hwModelSlug: "M5STACK",
    platformioTarget: "m5stack-core",
    architecture: "esp32",
    activelySupported: true,
    displayName: "M5 Stack",
  },
  {
    hwModel: 43,
    hwModelSlug: "HELTEC_V3",
    platformioTarget: "heltec-v3",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec V3",
  },
  {
    hwModel: 44,
    hwModelSlug: "HELTEC_WSL_V3",
    platformioTarget: "heltec-wsl-v3",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Wireless Stick Lite V3",
  },
  {
    hwModel: 47,
    hwModelSlug: "RPI_PICO",
    platformioTarget: "pico",
    architecture: "rp2040",
    activelySupported: true,
    displayName: "Raspberry Pi Pico",
  },
  {
    hwModel: 47,
    hwModelSlug: "RPI_PICO",
    platformioTarget: "picow",
    architecture: "rp2040",
    activelySupported: true,
    displayName: "Raspberry Pi Pico W",
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "heltec-wireless-tracker",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Wireless Tracker V1.1",
  },
  {
    hwModel: 58,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER_V1_0",
    platformioTarget: "heltec-wireless-tracker-V1-0",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Wireless Tracker V1.0",
  },
  {
    hwModel: 49,
    hwModelSlug: "HELTEC_WIRELESS_PAPER",
    platformioTarget: "heltec-wireless-paper",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Wireless Paper",
  },
  {
    hwModel: 50,
    hwModelSlug: "T_DECK",
    platformioTarget: "t-deck",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "LILYGO T-Deck",
  },
  {
    hwModel: 51,
    hwModelSlug: "T_WATCH_S3",
    platformioTarget: "t-watch-s3",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "LILYGO T-Watch S3",
  },
  {
    hwModel: 52,
    hwModelSlug: "PICOMPUTER_S3",
    platformioTarget: "picomputer-s3",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Pi Computer S3",
  },
  {
    hwModel: 53,
    hwModelSlug: "HELTEC_HT62",
    platformioTarget: "heltec-ht62-esp32c3-sx1262",
    architecture: "esp32-c3",
    activelySupported: true,
    displayName: "Heltec HT62",
  },
  {
    hwModel: 57,
    hwModelSlug: "HELTEC_WIRELESS_PAPER_V1_0",
    platformioTarget: "heltec-wireless-paper-v1_0",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Wireless Paper V1.0",
  },
  {
    hwModel: 59,
    hwModelSlug: "UNPHONE",
    platformioTarget: "unphone",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "unPhone",
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "tracksenger",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "TrackSenger (small TFT)",
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "tracksenger-lcd",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "TrackSenger (big TFT)",
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "tracksenger-oled",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "TrackSenger (big OLED)",
  },
  {
    hwModel: 61,
    hwModelSlug: "CDEBYTE_EORA_S3",
    platformioTarget: "CDEBYTE_EoRa-S3",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "EBYTE EoRa-S3",
  },
  {
    hwModel: 64,
    hwModelSlug: "RADIOMASTER_900_BANDIT_NANO",
    platformioTarget: "radiomaster_900_bandit_nano",
    architecture: "esp32",
    activelySupported: true,
    displayName: "RadioMaster 900 Bandit Nano",
  },
  {
    hwModel: 66,
    hwModelSlug: "HELTEC_VISION_MASTER_T190",
    platformioTarget: "heltec-vision-master-t190",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Vision Master T190",
  },
  {
    hwModel: 67,
    hwModelSlug: "HELTEC_VISION_MASTER_E213",
    platformioTarget: "heltec-vision-master-e213",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Vision Master E213",
  },
  {
    hwModel: 68,
    hwModelSlug: "HELTEC_VISION_MASTER_E290",
    platformioTarget: "heltec-vision-master-e290",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Heltec Vision Master E290",
  },
  {
    hwModel: 69,
    hwModelSlug: "HELTEC_MESH_NODE_T114",
    platformioTarget: "heltec-mesh-node-t114",
    architecture: "nrf52840",
    activelySupported: true,
    displayName: "Heltec Mesh Node T114",
  },
  {
    hwModel: 70,
    hwModelSlug: "SENSECAP_INDICATOR",
    platformioTarget: "seeed-sensecap-indicator",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Seeed SenseCAP Indicator",
  },
  {
    hwModel: 71,
    hwModelSlug: "TRACKER_T1000_E",
    platformioTarget: "tracker-t1000-e",
    architecture: "nrf52840",
    activelySupported: true,
    displayName: "Seeed Card Tracker T1000-E",
  },
  {
    hwModel: 72,
    hwModelSlug: "Seeed XIAO ESP32-S3",
    platformioTarget: "seeed-xiao-s3",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "Seeed XIAO ESP32-S3",
  },
];
