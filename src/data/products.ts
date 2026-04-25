
import motorImg from "@/assets/Motors-15.jpeg";
import proximity1Img from "@/assets/proximity_sensor.jpg";
import proximity2Img from "@/assets/Naeherungsschalter_LA18.jpg";
import proximity3Img from "@/assets/Naeherungsschalter_baureihe_LK_LA_L_M.jpg";
import levelForkImg from "@/assets/level switch.png";
import pidImg from "@/assets/pid_controller.jpg";
import plcPanelImg from "@/assets/PLC Control Panel -1.jpg";
import plcSystemImg from "@/assets/program_logic_controller.jpg";
import ballValveImg from "@/assets/pneumatic_ball_valve.jpg";
import controlValveImg from "@/assets/pneumatic_control_valve.jpg";
import positionerImg from "@/assets/positioner.jpg";
import pressureTxImg from "@/assets/pressure_transmitter.jpg";
import dpTxImg from "@/assets/DP-Transmitter-Group.png";
import gaugeImg from "@/assets/pressure_and_temprature_gauges.gif";
import rtdImg from "@/assets/rtd_sensors.png";
import pressureIndImg from "@/assets/pressure_transmitter_industrial_series.jpg";
import proximitySetImg from "@/assets/Naeherungsschalter_baureihe_LK_LA_L_M (1).jpg";
import actuatorValveImg from "@/assets/Haitima-Valve-Package-Actuated-Limit-Switch-Solenoid.jpg";
import thermocoupleImg from "@/assets/IM0061570.jpg";
import vfdImg from "@/assets/variable_frequancy_drive.jpg";
import panelImg from "@/assets/Electrical_control_panel.jpg";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  group: string;
  price: number;
  stock: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}
export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  groups: {
    name: string;
    items: string[];
  }[];
}

export const products: Product[] = [
  // 🔹 Motors (Mechanical/Electrical)
  {
    id: "motor-1",
    name: "Industrial Electric Motor",
    sku: "MTR-001",
    category: "mechanical",
    group: "Motors & Drives",
    price: 8500,
    stock: 45,
    rating: 4.8,
    image: motorImg,
    description: "Used to drive industrial machines like pumps, conveyors and compressors.",
    features: ["High efficiency", "Heavy duty", "Long life"],
    specs: [
      { label: "Power", value: "5 HP" },
      { label: "Voltage", value: "415V" },
    ],
  },

  // 🔹 Electrical Components
  {
    id: "vfd-1",
    name: "VFD Drive Control",
    sku: "VFD-021",
    category: "electrical",
    group: "Drives",
    price: 15500,
    stock: 25,
    rating: 4.7,
    image: vfdImg,
    description: "Variable frequency drive for precise motor speed control.",
    features: ["Energy saving", "Soft start"],
    specs: [
      { label: "Power", value: "11 KW" },
      { label: "Phases", value: "3 Phase" },
    ],
  },
  {
    id: "electrical-panel-1",
    name: "Power Control Center Panel",
    sku: "ELP-022",
    category: "electrical",
    group: "Control Panels",
    price: 85000,
    stock: 5,
    rating: 5.0,
    image: panelImg,
    description: "Main electrical power distribution and control panel.",
    features: ["Safety interlocks", "Custom wiring"],
    specs: [
      { label: "Amps", value: "400A" },
      { label: "Type", value: "Free Standing" },
    ],
  },

  // 🔹 Proximity Sensors (Instrumentation)
  {
    id: "proximity-1",
    name: "Inductive Proximity Sensor",
    sku: "PS-002",
    category: "instrumentation",
    group: "Sensors",
    price: 650,
    stock: 120,
    rating: 4.5,
    image: proximity1Img,
    description: "Detects metal objects without physical contact.",
    features: ["Non-contact detection", "Durable"],
    specs: [
      { label: "Range", value: "8mm" },
      { label: "Output", value: "PNP NO" },
    ],
  },

  {
    id: "proximity-2",
    name: "Cylindrical Proximity Sensor",
    sku: "PS-003",
    category: "instrumentation",
    group: "Sensors",
    price: 700,
    stock: 85,
    rating: 4.6,
    image: proximity2Img,
    description: "Threaded body sensor used in automation systems.",
    features: ["Compact", "Easy mounting"],
    specs: [
      { label: "Dia", value: "M18" },
      { label: "Range", value: "5mm" },
    ],
  },

  {
    id: "proximity-3",
    name: "Capacitive Proximity Sensor",
    sku: "PS-004",
    category: "instrumentation",
    group: "Sensors",
    price: 950,
    stock: 60,
    rating: 4.7,
    image: proximity3Img,
    description: "Detects liquid, plastic, powder materials.",
    features: ["Multi-material detection"],
    specs: [
      { label: "Range", value: "15mm" },
      { label: "Material", value: "Plastic" },
    ],
  },

  // 🔹 Level Sensor (Fork Type)
  {
    id: "level-fork",
    name: "Vibration Fork Level Sensor",
    sku: "LS-005",
    category: "instrumentation",
    group: "Level Measurement",
    price: 6500,
    stock: 25,
    rating: 4.9,
    image: levelForkImg,
    description: "Used to detect liquid level in tanks.",
    features: ["Accurate", "No calibration required"],
    specs: [
      { label: "Material", value: "SS 316L" },
      { label: "Supply", value: "24V DC" },
    ],
  },

  // 🔹 PID Controller
  {
    id: "pid-controller",
    name: "PID Temperature Controller",
    sku: "PID-006",
    category: "instrumentation",
    group: "Automation",
    price: 3200,
    stock: 40,
    rating: 4.4,
    image: pidImg,
    description: "Controls temperature in industrial processes.",
    features: ["Digital display", "Auto tuning"],
    specs: [
      { label: "Input", value: "J, K, Pt100" },
      { label: "Size", value: "96x96 mm" },
    ],
  },

  // 🔹 PLC Products (Assigned to Electrical/Automation)
  {
    id: "plc-panel",
    name: "PLC Logic Control Panel",
    sku: "PLC-007",
    category: "electrical",
    group: "Control Panels",
    price: 55000,
    stock: 12,
    rating: 5.0,
    image: plcPanelImg,
    description: "Automated logic control panel for machinery.",
    features: ["Fully programmable", "Reliable"],
    specs: [
      { label: "PLC", value: "S7-1200" },
      { label: "IO count", value: "32 DI / 24 DO" },
    ],
  },
  {
    id: "plc-system",
    name: "Compact PLC Unit",
    sku: "PLC-016",
    category: "electrical",
    group: "Automation",
    price: 45000,
    stock: 10,
    rating: 4.9,
    image: plcSystemImg,
    description: "Central processing unit for industrial automation systems.",
    features: ["Industrial grade"],
    specs: [
      { label: "Brand", value: "Siemens" },
      { label: "Memory", value: "128 KB" },
    ],
  },

  // 🔹 Pneumatic Ball Valve
  {
    id: "pneumatic-ball",
    name: "Pneumatic Ball Valve",
    sku: "VAL-008",
    category: "mechanical",
    group: "Valves",
    price: 7500,
    stock: 30,
    rating: 4.6,
    image: ballValveImg,
    description: "Air-operated valve for flow control.",
    features: ["Fast operation", "Low maintenance"],
    specs: [
      { label: "Size", value: "1 inch" },
      { label: "Pressure", value: "10 Bar" },
    ],
  },

  // 🔹 Control Valve
  {
    id: "control-valve",
    name: "Pneumatic Control Valve",
    sku: "VAL-009",
    category: "mechanical",
    group: "Valves",
    price: 12000,
    stock: 15,
    rating: 4.7,
    image: controlValveImg,
    description: "Used to regulate flow, pressure, temperature.",
    features: ["Precise control"],
    specs: [
      { label: "Inlet", value: "2 inch" },
      { label: "Range", value: "3-15 PSI" },
    ],
  },

  // 🔹 Positioner
  {
    id: "valve-positioner",
    name: "Valve Positioner",
    sku: "POS-010",
    category: "instrumentation",
    group: "Valve Accessories",
    price: 6800,
    stock: 20,
    rating: 4.8,
    image: positionerImg,
    description: "Controls valve position accurately.",
    features: ["High accuracy"],
    specs: [
      { label: "Input", value: "4-20mA" },
      { label: "Type", value: "Electro-Pneumatic" },
    ],
  },

  // 🔹 Pressure Transmitters
  {
    id: "pressure-tx",
    name: "Instrumentation Pressure TX",
    sku: "PT-011",
    category: "instrumentation",
    group: "Pressure",
    price: 4500,
    stock: 55,
    rating: 4.5,
    image: pressureTxImg,
    description: "High precision pressure transmitter for lab and field.",
    features: ["Small footprint"],
    specs: [
      { label: "Range", value: "0-10 Bar" },
      { label: "Connection", value: "1/4 NPT" },
    ],
  },
  {
    id: "dp-tx",
    name: "Differential Pressure TX",
    sku: "DPT-012",
    category: "instrumentation",
    group: "Pressure",
    price: 9500,
    stock: 18,
    rating: 4.6,
    image: dpTxImg,
    description: "Measures small pressure differences in air and gases.",
    features: ["High sensitivity"],
    specs: [
      { label: "Range", value: "0-100 mmWC" },
      { label: "Mounting", value: "Wall" },
    ],
  },

  // 🔹 RTD & Thermocouple
  {
    id: "rtd",
    name: "RTD PT100 Sensor",
    sku: "RTD-014",
    category: "instrumentation",
    group: "Temperature",
    price: 1200,
    stock: 150,
    rating: 4.6,
    image: rtdImg,
    description: "Class A platinum RTD sensor.",
    features: ["Long term stability"],
    specs: [
      { label: "Type", value: "Pt100" },
      { label: "Sheath", value: "6mm SS316" },
    ],
  },
  {
    id: "thermocouple",
    name: "Thermocouple Probe",
    sku: "TC-019",
    category: "instrumentation",
    group: "Temperature",
    price: 1100,
    stock: 100,
    rating: 4.5,
    image: thermocoupleImg,
    description: "Heavy duty K-type sensor for furnaces.",
    features: ["Fast response"],
    specs: [
      { label: "Type", value: "K" },
      { label: "Range", value: "0-1200C" },
    ],
  },
];

export const categories: Category[] = [
  {
    slug: "instrumentation",
    name: "Instrumentation",
    tagline: "Precision Measurement & Control",
    description:
      "Wide range of sensors, transmitters, and controllers for industrial process monitoring.",
    groups: [
      {
        name: "Sensors",
        items: ["proximity-1", "proximity-2", "proximity-3"],
      },
      {
        name: "Pressure",
        items: ["pressure-tx", "dp-tx"],
      },
      {
        name: "Temperature",
        items: ["rtd", "thermocouple"],
      },
      {
        name: "Level Measurement",
        items: ["level-fork"],
      },
    ],
  },
  {
    slug: "mechanical",
    name: "Mechanical",
    tagline: "Industrial Equipment & Valving",
    description:
      "High-performance mechanical components, valves, and conveyor systems for factory automation.",
    groups: [
      {
        name: "Valves",
        items: ["pneumatic-ball", "control-valve"],
      },
      {
        name: "Equipment",
        items: ["motor-1"],
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    tagline: "Power Distribution & Drives",
    description:
      "Electrical drives, power components, and wiring solutions for industrial systems.",
    groups: [
      {
        name: "Drives",
        items: ["vfd-1"],
      },
      {
        name: "Control Panels",
        items: ["electrical-panel-1", "plc-panel"],
      },
      {
        name: "Automation",
        items: ["plc-system"],
      },
    ],
  },
];

export function findProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function findCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function productsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}