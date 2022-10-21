import { Container, Navbar } from "react-bootstrap"


const Footer = () => {
  return (

    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">SMAN 1 Bhakti Kencana</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            Tahun Ajaran : <a href="#login" className="text-decoration-none">2022</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Footer