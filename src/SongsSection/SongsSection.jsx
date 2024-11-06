import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import axios from "axios";
import Section from "../Section/Section";  // Reusable section component
import Carousel from "../Carousel/Carousel"; // Reusable carousel component
import "./SongsSection.css"; // Custom CSS for styling

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  // Fetch songs and genres data on component mount
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsResponse = await axios.get("https://qtify-backend-labs.crio.do/songs");
        setSongs(songsResponse.data);
        setFilteredSongs(songsResponse.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    const fetchGenres = async () => {
      try {
        const genresResponse = await axios.get("https://qtify-backend-labs.crio.do/genres");
        setGenres(["All", ...genresResponse.data.map((genre) => genre.name)]);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  // Filter songs based on selected genre
  const handleTabChange = (event, newValue) => {
    setActiveGenre(newValue);
    if (newValue === "All") {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(songs.filter((song) => song.genre === newValue));
    }
  };

  return (
    <div className="songs-section">
      <h2>Songs</h2>
      <Tabs
        value={activeGenre}
        onChange={handleTabChange}
        className="genre-tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#32CD32", // Custom green underline for the active tab
          },
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>

      {/* Carousel for displaying songs */}
      <Section>
        <Carousel items={filteredSongs} showAllButton={false} displayLikes={true} />
      </Section>
    </div>
  );
};

export default SongsSection;
