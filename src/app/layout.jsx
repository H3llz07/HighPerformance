import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

export const metadata = {
  title: {
    default: "HighPerformance Calibrations",
    template: "%s | HighPerformance Calibrations",
  },
  description:
    "HighPerformance Calibrations provides an ADAS calibration service for your car. So if you're looking for the best calibration service in LA you can trust in HighPerformance.",
  keywords: [
    "calibrations",
    "adas calibrations",
    "HighPerformance",
    "sensor calibration",
    "calibration service",
    "Los Angeles ADAS",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "HighPerformance Calibrations",
    description:
      "Precision ADAS calibration services in Los Angeles. Radar, camera, and sensor calibration you can trust.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
