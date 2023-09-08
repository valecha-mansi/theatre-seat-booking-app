import { Button, Image, Layout } from "antd";
import { useLocation } from "react-router-dom";
import { RightOutlined, StarTwoTone } from '@ant-design/icons';

const {Content, Footer, Sider, Header} = Layout;

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '50%',
    marginLeft: 30,
    marginRight: 200,
    justifyContent: 'space-between',
    color: '#fff',
    borderStyle: 'dotted',
    boderColor: 'grey'
};

const LayoutStyle = { 
    padding : 60, 
    backgroundColor: 'black'
  }

  const siderStyle = {
    // textAlign: 'start',
    // lineHeight: '120px',
    // color: '#fff',
    // backgroundColor: 'black'
  };

  const contentStyle = {
    textAlign: 'start',
    minHeight: 120,
    lineHeight: '30px',
    color: '#fff',
    paddingInline: 50,
    backgroundColor: 'black'
  };

const CheckoutPage = () => {
    const location = useLocation();
    const checkoutDetails = location.state;
    return (
        <div>
    <Layout style={LayoutStyle}>
        <Sider style={siderStyle}>
        <Image alt="example" src={`${checkoutDetails.moviesData.Poster}`} />
        </Sider>
    <Layout style={{backgroundColor: 'black'}}>
      <div style={headerStyle}>
        <p style={{textAlign: 'start'}}>
        {checkoutDetails.moviesData.Title} <br/>
        {checkoutDetails.moviesData.Genre} <br/>
        {checkoutDetails.timingSelected[0]} <br/>
        </p>
        <div>
            {checkoutDetails.selectedSeats}<br/> Tickets
        </div>
    </div>
      <Content>
      <div style={headerStyle}>
        <p style={{textAlign: 'start'}}>
        Tickets Price <br/>
        Convenience fees <br/><br/>
        Total Payable Amount
        </p>
        <div>
        <p style={{textAlign: 'start'}}>
        $ {checkoutDetails.amount} <br/>
        $ 5 <br/><br/>
        ${parseInt(checkoutDetails.amount) + parseInt(5) } 
        </p>
        </div>
        </div>
      </Content>
      <a href="/" style={{backgroundColor: 'black',}}> 
      <div style={{display: 'flex',
    flexDirection: 'row',
    height: '50%',
    marginLeft: 30,
    marginRight: 200,
    justifyContent: 'space-between',
    color: '#fff',}}>
      <p style={{textAlign: 'start'}}><StarTwoTone />Unlock Offers or Apply Promocode</p>
      <div><RightOutlined/></div>
    </div></a>
    </Layout>
    </Layout>
    <Button style={{alignSelf: 'center',width: 400, margin: 20}}>Pay ${parseInt(checkoutDetails.amount) + parseInt(5) } </Button>
   </div>
    )

}

export default CheckoutPage;