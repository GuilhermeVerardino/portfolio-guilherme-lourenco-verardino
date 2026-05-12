import { Options, DrawType, ErrorCorrectionLevel, Mode, TypeNumber, DotType, CornerSquareType, CornerDotType } from "qr-code-styling";

export interface QRCodeOptions extends Options {
  width: number;
  height: number;
  margin: number;
  data: string;
  image?: string;
  type: DrawType;
  qrOptions: {
    typeNumber: TypeNumber;
    mode: Mode;
    errorCorrectionLevel: ErrorCorrectionLevel;
  };
  imageOptions: {
    hideBackgroundDots: boolean;
    imageSize: number;
    margin: number;
    crossOrigin: string;
  };
  dotsOptions: {
    type: DotType;
    color: string;
    gradient?: {
      type: "linear" | "radial";
      rotation: number;
      colorStops: { offset: number; color: string }[];
    };
  };
  backgroundOptions: {
    color: string;
    gradient?: {
      type: "linear" | "radial";
      rotation: number;
      colorStops: { offset: number; color: string }[];
    };
  };
  cornersSquareOptions: {
    type: CornerSquareType;
    color: string;
    gradient?: {
      type: "linear" | "radial";
      rotation: number;
      colorStops: { offset: number; color: string }[];
    };
  };
  cornersDotOptions: {
    type: CornerDotType;
    color: string;
    gradient?: {
      type: "linear" | "radial";
      rotation: number;
      colorStops: { offset: number; color: string }[];
    };
  };
}
