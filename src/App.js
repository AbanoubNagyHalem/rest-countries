import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import ListOfCards from "./components/ListOfCards";
import { Spinner } from "react-bootstrap";

function App() {
  const [mode, setMode] = useState("light");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchFromApi = (e) => {
    const searchTerm = e.target.value;
    if (!searchTerm) {
      fetchData();
      return;
    }

    setLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
          setError(null);
        } else {
          throw new Error('Data format is not valid');
        }
        setLoading(false);
      })
      .catch(error => {
        setData([]);
        setError(error.message);
        setLoading(false);
      });
  };

  const filterRegion = (e) => {
    const regionFilter = e.target.textContent
    if (!regionFilter) {
      fetchData();
      return;
    }

    setLoading(true);
    fetch(`https://restcountries.com/v3.1/region/${regionFilter}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
          setError(null);
        } else {
          throw new Error('Data format is not valid');
        }
        setLoading(false);
      })
      .catch(error => {
        setData([]);
        setError(error.message);
        setLoading(false);
      });

  }

  const changeMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  const fetchData = () => {
    setLoading(true);
    fetch('https://restcountries.com/v3.1/all')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
          setError(null);
        } else {
          throw new Error('Data format is not valid');
        }
        setLoading(false);
      })
      .catch(error => {
        setData([]);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Header mode={mode} changeMode={changeMode} />
      <SearchFilter mode={mode} searchFromApi={searchFromApi} filterRegion={filterRegion} fetchData={fetchData} />
      {
        loading ? (
          <div className={`loading ${mode}`} > <Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" /></div>
        ) : (
          <ListOfCards mode={mode} data={data} error={error} />
        )
      }
    </Fragment >
  );
}

export default App;
