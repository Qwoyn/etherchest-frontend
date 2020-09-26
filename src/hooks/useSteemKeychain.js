import {useState, useEffect} from "react";

export default function() {
  const [hasKeychain, setHasKeychain] = useState(
    window && window.hive
  );

  useEffect(() => {
    window.onload = () => {
      if (window && window.hive) {
        setHasKeychain(true);
      }
    };
  }, []);

  function checkKeychain() {
    if (hasKeychain) return true;
    if (window && window.hive) {
      setHasKeychain(true);
      return true;
    } else {
      return false;
    }
  }

  return checkKeychain;
}
