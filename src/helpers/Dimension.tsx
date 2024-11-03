import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export function useScreenDimensions() {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const handleChange = (newDimensions: any) => {
      setDimensions(newDimensions);
    };

    const subscription = Dimensions.addEventListener("change", handleChange);
    return () => subscription?.remove();
  }, []);

  return dimensions;
}
