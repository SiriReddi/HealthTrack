import _ from "lodash";

import React, { Component } from "react";
// import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "../components/Video/search_bar";
import VideoList from "../components/Video/video_list";
import VideoDetail from "../components/Video/video_detail";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SidebarComponent from "../components/Dashboard/sidebar/SidebarComponent";
import HeaderComponent from "../components/Dashboard/header/HeaderComponent";
import ContentComponent from "../components/Dashboard/content/ContentComponent";
import RightSideComponent from "../components/Dashboard/rightsidebar/RightSideBarComponent";
import RectCardComponent from "../components/Dashboard/content/RectCardComponent";

const API_KEY = "AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA";

const styles = StyleSheet.create({
  dash: {
    backgroundImage:
      "linear-gradient(to right top, #6d455c, #7a5475, #84668f, #8a78aa, #8b8cc5, #778fc5, #6391c3, #4f92be, #307f9d, #1d6b7b, #17575c, #164340"
    // backgroundImage:
    //   "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)"
  },
  container: {
    display: "flex",
    height: "5%",
    // minHeight: "100vh",
    maxHeight: "10%",
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
  },
  minicontent: {
    width: "100%",
    borderRadius: "30%",
    padding: "10px",
    marginTop: 5,
    height: "5%",
    maxHeight: "10%"
  },
  content: {
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
    // backgroundImage:
    //   "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)"
  },
  contentside: {
    marginTop: 0,
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    width: "auto"
    // height: "5%",
    // maxHeight: "10%"
  },
  mainBlock: {
    // backgroundImage:
    //   "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    padding: 20,
    paddingRight: 10,
    width: "60%",
    maxWidth: "60%",
    height: "5%",
    maxHeight: "10%"
  },
  side: {
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    color: "gray"
  },
  articles: {
    marginTop: "5%",
    marginLeft: "5%",
    marginBottom: "5%",
    lineSpacing: "5%"
  }
  // link: {
  //   marginTop: "5%",
  //   marginLeft: "5%"
  // }
});

class Video extends Component {
  state = { selectedItem: "Videos" };
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Yoga");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //Same as this.setState({ videos : videos })
    });
  }

  render() {
    const { selectedItem } = this.state;
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className={css(styles.dash)}>
        <Row className={css(styles.container)}>
          <SidebarComponent
            className={css(styles.side)}
            selectedItem={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
          />
          <Column flexGrow={1} className={css(styles.mainBlock)}>
            <HeaderComponent title={selectedItem} />
            {/* <div className={css(styles.minicontent)}>
              <RectCardComponent />
            </div> */}
            <div className={css(styles.content)}>
              <h5>Youtube Search:</h5>
              <SearchBar onSearchTermChange={videoSearch} />
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList
                onVideoSelect={selectedVideo =>
                  this.setState({ selectedVideo })
                }
                videos={this.state.videos}
              />
            </div>
          </Column>
          <div className={css(styles.articles)}>
            Related Articles
            <br></br>
            <a
              className={css(styles.link)}
              href="https://www.foodnetwork.com/healthy/packages/healthy-every-week/healthy-mains/foodnetwork-most-saved-healthy-recipes"
            >
              Healthy recipes
            </a>
            <br></br>
            <a
              className={css(styles.link)}
              href="https://www.active.com/fitness/articles/5-simple-tips-for-fitness-success"
            >
              Fitness tips
            </a>
          </div>
        </Row>
      </div>
    );
  }
}

export default Video;
