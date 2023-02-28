// import Navbar from "react-bootstrap";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
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
        src="https://drive.google.com/file/d/1erjVbVB3TG3BMBigxpHfWurnB52qaBHL/view?usp=sharing"
        alt="Foto Profile"
        width="100%"
        height="auto"
        rounded
      />
    </>
  );
}
export default Header;
