import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const DetailPage = () => {
    return (
      <div style={{
        display: 'block', padding: 10
      }}>
        <h4 style={{color: '#FDEDEC'}}>Book My Show</h4>
        <Layout>
      <Sider style={siderStyle}>Sider</Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          Description:
          Genres:
          Actor:
          Director:
          Show Timings:
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
    {/* <div>
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
      </div> */}
      </div>
    )
  };
  
export default DetailPage;