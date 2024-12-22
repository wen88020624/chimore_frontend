import { Layout, Row, Col, Typography, Button, Card } from 'antd'
import './App.css'
import ContactUs from './components/ContactUs'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography

function App() {
  return (
    <Layout>
      <div className="banner-section">
        <img src="/assets/homeBanner.jpg" className="banner-image" alt="banner" />
        <div className="banner-text"> 
          <Title level={1}>
            奇模<br />專業都更<br />展望未來
          </Title>
        </div>
      </div>

      {/* <Content>
        <div className="intro-section">
          <img src="/assets/introBgImg.jpg" className="intro-bg-image" alt="intro background" />
          <div className="intro-content">
            <Title level={2}>奇模簡介</Title>
            <Paragraph>
              奇模成立於2006年，主要營業項目包括區域計畫、都市計畫、都市更新以及各種主題之規劃研究，以成為一個多元化經營與發展之都市計畫專業顧問公司為目標。
              對於都市計畫通盤檢討及個案變更亦均涉獵極深，目前亦執行許多個案變更之案例。
            </Paragraph>
          </div>
        </div>

        <Row className="navigation-section" justify="space-around" align="middle">
          <Col xs={8} md={6}>
            <a href="/intro" className="nav-link">
              <img src="/assets/goIntroImg.svg" className="nav-icon" alt="introduction" />
              <Title level={4}>公司簡介</Title>
            </a>
          </Col>
          <Col xs={8} md={6}>
            <a href="/service" className="nav-link">
              <img src="/assets/goServiceImg.svg" className="nav-icon" alt="services" />
              <Title level={4}>服務項目</Title>
            </a>
          </Col>
          <Col xs={8} md={6}>
            <a href="/projects" className="nav-link">
              <img src="/assets/goProjectsImg.svg" className="nav-icon" alt="projects" />
              <Title level={4}>案例實績</Title>
            </a>
          </Col>
        </Row>

        <div className="projects-section">
          <Row gutter={[32, 32]}>
            <Col span={12}>
              <Card
                cover={<img src="/assets/projectInHome1.jpg" alt="project 1" />}
                bordered={false}
              >
                <Card.Meta
                  title="新北市五股區審議大會通過"
                  description="賀擬訂新北市五股區中興段777地號(原更寮段褒子寮小段73-4地號)等9筆(原5筆)土地都市更新事業計畫案 審議大會通過"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                cover={<img src="/assets/projectInHome2.jpg" alt="project 2" />}
                bordered={false}
              >
                <Card.Meta
                  title="新北市五股區審議大會通過"
                  description="賀擬訂新北市中和區健康段954地號等7筆土地都市更新事業計畫案 審議大會通過"
                />
              </Card>
            </Col>
          </Row>
        </div>

        <ContactUs />
      </Content> */}
    </Layout>
  )
}

export default App
