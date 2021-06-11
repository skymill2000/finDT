import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";
import axios from "axios";
import qs from "qs";

const AuthResultPage = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);
  const [accessToken, setaccessToken] = useState("토큰 받아오기 전 데이터");

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = () => {

  };

  return (
    <>
      <Header title={"사용자 발급 토큰 확인"}></Header>
      <p>사용자가 발급받은 사용자 코드는</p>
      <p>{code}</p>
      <p>사용자의 토큰은?</p>
      <p>{accessToken}</p>
    </>
  );
};

export default AuthResultPage;