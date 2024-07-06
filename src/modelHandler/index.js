import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

// model path
const modelJson = require("../../assets/model/yolov5n-320/model.json");
const modelWeights = [
  require("../../assets/model/yolov5n-320/group1-shard1of7.bin"),
  require("../../assets/model/yolov5n-320/group1-shard2of7.bin"),
  require("../../assets/model/yolov5n-320/group1-shard3of7.bin"),
  require("../../assets/model/yolov5n-320/group1-shard4of7.bin"),
  require("../../assets/model/yolov5n-320/group1-shard5of7.bin"),
  require("../../assets/model/yolov5n-320/group1-shard6of7.bin"),
  require("../../assets/model/yolov5n-320/group1-shard7of7.bin"),
];

/**
 * loadModel for Android and IOS
 * loading model via bundleResourceIO and assets
 */
export const modelURI = bundleResourceIO(modelJson, modelWeights);
