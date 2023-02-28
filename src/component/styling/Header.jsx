// import Navbar from "react-bootstrap";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Foto from "../assets/image/34.jpg";
const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Profile</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>Riwayat Pendidikan</Nav.Link>
            <Nav.Link>Pengalaman Kerja</Nav.Link>
            <Nav.Link>Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export function Profile() {
  return (
    <>
      <Image
        src={Foto}
        alt="Foto Profile"
        width="300px"
        height="auto"
        rounded
      />
    </>
  );
}
export default Header;
