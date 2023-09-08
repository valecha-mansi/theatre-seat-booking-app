import React, { useEffect } from 'react'
import { List, Card, Space, Image } from 'antd';
import { getMovies } from '../Redux/action';
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
  const navigate = useNavigate();
  const {fetchMovies, movieList} = props;

  useEffect(() => {
    fetchMovies();
  },[]);

  const handleMovieById = (id) => {
    navigate('/details', {state: id })   
  } 

    return (
        <div style={containerStyle}>
            <h4 style={headerStyle}>Book My Show</h4>
            <List
                grid={{ gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 4,xxl: 3, }}
                dataSource={movieList}
                renderItem={item => (
                <List.Item>
                  <Space
                      direction="vertical"
                      size="middle"
                      style={spaceStyle}
                    >
                    <Card onClick={() => handleMovieById(item.id)}hoverable style={cardStyle}
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
    }
  }

  const mapStateToProps = (state) => {
    return {
      movieList: state.MovieReducer.movies,
    }
  };

  
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);