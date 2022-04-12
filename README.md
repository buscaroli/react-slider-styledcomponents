# React-slider-styledcomponents

Learning how to use styled components and how to implement an Image Slider component in ReactJS.

### What

Implemented a simple interface with a Top Navbar and a Slider Component underneath.

### Why

I had tried to use styled components a while ago and wasn't very impressed. Saw a couple of videos and decided to give it another go and I am happy I did.
Used properly styled components can help keeping the code tidy by keeping code and styling all in one place.

### Taking Note

#### Slider and useEffect()

I struggled implementing the timer for the slider.

At first I was just using a cycling function inside a setInterval().
Then I decided to replace it with a setTimeout() inside a useEffect hook but it was still behaving badly: the images weren't scrolling appropriately wit images skipping or staying on the screen for twice/thrice the amount of time.

Searching for a solution I found out _you need to add useRef as well!_

```
...

const [index, setIndex] = useState(0)
  const [currentIdx, setCurrentIdx] = useState(0)
  const length = pics.length
  const timeout = useRef(null)

  useEffect(() => {
    const nextPic = () => {
      setIndex((idx) => (idx >= length - 1 ? 0 : index + 1))
    }
    timeout.current = setTimeout(nextPic, 4000)

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [index, length])

  ...

```

#### Styled Components

_You can use React-Router-Doms within Styled-components:_

```
...

const NavMenuLink = styled(Link)`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-decoration: none;
  padding-right: 1.5rem;
`

...

<NavMenu>
  {menuLinks.map((link, index) => {
    return (
      <NavMenuLink to={link.address} key={index}>
        {link.text}
      </NavMenuLink>
    )
  })}
</NavMenu>

...
```

_You can use SCSS within styled components:_

```
  const HamburgerWrapper = styled.div`
  color: white;
  font-size: 1.5rem;
  padding-right: 1rem;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const StyledHamburgerMenu = styled(FaBars)`
  transition: all, 0.3s;

  &:hover {
    transform: scale(1.5);
  }
`
```

### Thanks

To Brian Design.
Video @ https://www.youtube.com/watch?v=sKs9FiAHSN4
