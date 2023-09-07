import React, { useEffect } from 'react'
// import "antd/dist/antd.css";
import { List, Card, Space, Image } from 'antd';
import { getMovieDetails, getMovies } from '../Redux/action';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const containerStyle = {
  display: 'block', 
  padding: 10
}

const headerStyle = {
  color: '#FDEDEC',
  fontStyle: 'oblique',
  fontSize: '150%',
} 

const cardStyle = {
  width: 240, 
  height: 500,
  backgroundColor: '#FDEDEC'
}

const spaceStyle = {
  display: 'flex',
}

const HomePage = (props) => {
  useEffect(() => {
    props.fetchMovies();
  },[]);
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    // props.fetchMovieDetails(id);

    navigate('/details', {state:{}});
  }
    return (
        <div style={containerStyle}>
            <h4 style={headerStyle}>Book My Show</h4>
            <List
                grid={{ gutter: 16,xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 4,
                  xxl: 3, }}
                dataSource={props.movieList}
                renderItem={item => (
                <List.Item>
                  <Space
                      direction="vertical"
                      size="middle"
                      style={spaceStyle}
                    >
                    <Card onClick={navigateToDetails}hoverable style={cardStyle}
                      cover={<Image alt="example" src={`${item.Poster}`} />}>
                     <Meta title={item.Title} description={item.Genre} />
                    </Card>
                  </Space>
                </List.Item>
                )}
            />
          </div>
    )
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchMovies: () => dispatch(getMovies()),
      fetMovieDetails: () => dispatch(getMovieDetails())
    }
  }

const mapStateToProps = (state) => {
  console.log("MOVIESS===", state)
  return {
  movieList: state.MovieReducer.movies,
}
};

  
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);