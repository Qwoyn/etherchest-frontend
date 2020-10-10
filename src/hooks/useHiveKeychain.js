import {useState, useEffect} from "react";

export default function() {
  const [hasKeychain, setHasKeychain] = useState(
    window && window.hive_keychain
  );

  useEffect(() => {
    window.onload = () => {
      if (window && window.hive_keychain) {
        setHasKeychain(true);
      }
    };
  }, []);

  function checkKeychain() {
    if (hasKeychain) return true;
    if (window && window.hive_keychain) {
      setHasKeychain(true);
      return true;
    } else {
      return false;
    }
  }

  return checkKeychain;
}
