module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    env: {
      NREL_APIKEY: "BefAcwRk9eNzI7rFxc9GdyM2nmjWzmBSZMVn7b2g",
      MAPBOX_APIKEY:
        "pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw",
      OPENEI_APIKEY: "Wxf8WxTrdvw09dGbJ5NEZy5BbUX84FaV3sKCxTiV",
    },
  };
  
  return nextConfig;
};
