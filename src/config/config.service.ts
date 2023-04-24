import dotenv from "dotenv";
import path from "path";
import { developmentConfig } from "./development.config";
import { productionConfig } from "./production.config";
import * as process from "process";

dotenv.config({
  path: path.join(__dirname, "../../.env"),
});
export const ConfigService = {
  provide: "ConfigService",
  useValue:
    process.env.NODE_ENV === "development"
      ? developmentConfig
      : productionConfig,
};
