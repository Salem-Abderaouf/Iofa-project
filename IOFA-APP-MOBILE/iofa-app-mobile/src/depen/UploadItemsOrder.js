const UploadItemsOrder = [
  /*{
    id: 1,
    name: "Dashboard & Map",

    status: true,
    img: require("../Uploads/Dashboard_&_Map/01.png"),
    description:
      "You can see the operating status of all farm monitors with a detailed map. And knowledge of active, inactive and offline devices as well as equipment malfunctions.",
    navigatTo: "DashbardAndMap",
  },

  {
    id: 2,
    name: "Weather Station",

    status: false,
    img: require("../Uploads/Weather_Station/01.png"),
    description: "Weather Station description",
    navigatTo: "WeatherStation",
  },*/
  {
    id: 3,
    name: "Pump Status",
    status: false,
    img: require("../Uploads/Pump_Status/02.png"),
    description:
      'In this section we show our pump status and activity status, running time, and power consumption. We can also control it, turn it on and off remotely',
    navigatTo: "PumbScreen",
  },

  {
    id: 4,
    name: "Water Tank",
    status: true,
    img: require("../Uploads/Water_Tank/02.png"),
    description: "Check level of water tank ",
    navigatTo: "WeatherTank",
  },
  {
    id: 5,
    name: "Soil Conditions",

    status: true,
    img: require("../Uploads/Soil_Conditions/01.png"),
    description:
      "Displays our soil condition, moisture and temperature, location, days of growth, rain levels and individual moisture probe levels.",
    navigatTo: "SoilCondition",
  },
  {
    id: 6,
    name: "Maintenance",

    status: false,
    img: require("../Uploads/Maintenance/01.png"),
    description:
      "Our system calculates the operating time of each pump and can send alerts when user-specified maintenance tasks need to be completed. The maintenance tasks we track include grease fittings, oil and oil filter changes, air filter changes, and monitoring of power levels. Here, with keeping every maintenance operation carried out, through a record containing the work performed and the date of its completion",
    navigatTo: "Maintenance",
  },

  {
    id: 7,
    name: "Aerial Survey",

    status: false,
    img: require("../Uploads/Aerial_Survey/01.png"),
    description: "Aerial Survey Description",
    navigatTo: "AerialSurvey",

  },

  {
    id: 8,
    name: "Surveillance",

    like: false,
    img: require("../Uploads/Surveillance/01.png"),
    description: "Surveillance Description",
    navigatTo: "Surveillance",
  },



  {
    id: 10,
    name: "watering pump",

    like: false,
    img: require("../Uploads/Pump_Status/08.png"),
    description: 'watering pump Description',
    navigatTo: "PumpWatering",
  },

  {
    id: 11,
    name: "Aquaculture",

    like: false,
    img: require("../Uploads/Aquaculture/01.png"),
    description: 'watering pump Description',
    navigatTo: "Aquaculture",
  },


];

export default UploadItemsOrder;
