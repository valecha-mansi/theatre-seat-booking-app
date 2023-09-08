import React, { useEffect, useState } from 'react';
import { Layout, Image, Tag, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails, getMovies } from '../Redux/action';
import { List, Card, Space } from 'antd';
import { connect } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;
const {CheckableTag} = Tag;
const { Meta } = Card;

const headerStyle = {
  textAlign: 'start',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'black',
  font: 'italic',
};
const contentStyle = {
  textAlign: 'start',
  minHeight: 120,
  lineHeight: '30px',
  color: '#fff',
  paddingInline: 50,
  backgroundColor: 'black'
};
const listStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
}
const siderStyle = {
  textAlign: 'start',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'black'
};
const footerStyle = {
  textAlign: 'start',
  color: '#fff',
  backgroundColor: 'black'
};

const cardStyle = {
  width: 240, 
  height: 500,
  backgroundColor: '#FDEDEC'
}

const spaceStyle = {
  display: 'flex',
}

const DetailPage = (props) => {
  const {fetchMovieDetails, movieDetail, fetchMovies} = props;
  const [isButtonCLicked, setButtonClicked] = useState(false);
  const location = useLocation();
  const movieId = location.state;
  const navigate = useNavigate();
  const showTiming = movieDetail.theaters && movieDetail?.theaters[0]?.showing[0]?.time;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [selectedTags, setSelectedTags] = useState([showTiming]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
    setButtonClicked(true);
  };

  useEffect(() => {
    fetchMovieDetails(movieId);
    fetchMovies();
  },[]);


  const handleSeatBooking = () => {
    navigate('/seatAllocation', {state: {details: movieDetail, timeSelected: selectedTags}})
  }

  return (
      <div style={{padding: 10}}>
        <div>
        <h4 style={{color: '#FDEDEC',fontStyle: 'oblique',fontSize: '150%',}}>Book My Show</h4>
      <Layout>
      <Sider style={siderStyle}>
        <Image alt="example" src={`${movieDetail.Poster}`} />
      </Sider>
      <Layout>
        <Header style={headerStyle}>{movieDetail.Title}</Header>
        <Content style={contentStyle}>
          <ul style={listStyle}>
            <li> Description : {movieDetail.Plot}</li>
            <li> Genres : {movieDetail.Genre}</li>
            <li> Actor : {movieDetail.Actors}</li>
            <li> Director : {movieDetail.Director}</li>
          </ul>
        </Content>
        <Footer style={footerStyle}>
          Show Timings :
          {movieDetail.theaters && movieDetail?.theaters[0]?.showing[0]?.time.map((item) => 
            <CheckableTag
            key={item}
            checked={selectedTags.includes(item)}
            onChange={(checked) => handleChange(item, checked)}
            style={{backgroundColor: "GrayText"}}
          >{item}</CheckableTag>
          )}  
          <div style={{paddingTop: 20}}>
          <Button
            onClick={handleSeatBooking} 
            type="primary" 
            disabled={!isButtonCLicked} 
            style={{backgroundColor: isButtonCLicked ? 'blue' : '#85C1E9'  }}>
            Book Seat
          </Button>
          </div>
          
        </Footer>
         
      </Layout>
    </Layout>
    </div>
    <div>
      <h4 style={{}}>Recommended</h4>
            <List
                grid={{ gutter: 16,xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 4,
                  xxl: 3, }}
                dataSource={props.movieList.slice(0, 4)}
                renderItem={item => (
                <List.Item>
                  <Space
                      direction="horizontal"
                      size="middle"
                      style={spaceStyle}
                    >
                    <Card hoverable style={cardStyle}
                      cover={<Image alt="example" src={`${item.Poster}`} />}>
                     <Meta title={item.Title} description={item.Genre} />
                    </Card>
                  </Space>
                </List.Item>
                )}
            />
      </div>
      </div>

    )
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchMovieDetails: (id) => dispatch(getMovieDetails(id)),
      fetchMovies: () => dispatch(getMovies()),
    }
  }

  const mapStateToProps = (state) => {
    return {
      movieDetail: state.MovieReducer.movie,
      movieList: state.MovieReducer.movies,
    }
  };

  
export default connect(mapStateToProps,mapDispatchToProps)(DetailPage);
  