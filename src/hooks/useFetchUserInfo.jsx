import axios from "axios";
import { useEffect, useState } from "react";

function useFetchUserInfo(username) {
  const [userInfoData, setUserInfoData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    const fetchUserInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVICE_BASE_URL}/fetchUserInfo/${username}`
        );
        setUserInfoData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [username]);

  return { userInfoData, error, loading };
}

export default useFetchUserInfo;
