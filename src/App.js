import { Box } from '@chakra-ui/layout'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { profolioList } from './projectList'
import AnimateComponent from './components/AnimateBox'
import MyMenu from './components/MyMenu'
import { Provider } from './context/modalOpenContext'
import MyDrawer from './components/MyDrawer'

const StyledBg = styled(Box)`
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
`

function App() {
	const [hoverIndex, setHoverIndex] = useState(0)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [modalState, setModalState] = useState({ type: '', index: null })
	const [drawerState, setDrawerState] = useState('close')

	useEffect(() => {
		function widthSetter() {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', widthSetter)
		return () => {
			widthSetter()
		}
	}, [])

	const providerValue = { modalState, setModalState, drawerState, setDrawerState }

	return (
		<Provider value={providerValue}>
			<StyledBg>
				{profolioList.map((item, i) => {
					if (i < Math.floor(windowWidth / 400)) {
						return <AnimateComponent data={item} key={i} columnIndex={i} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} />
					} else if (i === 0) {
						return <AnimateComponent data={item} key={i} columnIndex={i} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} />
					} else {
						return (
							<Box maxW="0" key={i}>
								<AnimateComponent data={item} key={i} columnIndex={i} hoverIndex={hoverIndex} setHoverIndex={setHoverIndex} />
							</Box>
						)
					}
				})}
				<MyDrawer />
			</StyledBg>
			<MyMenu />
		</Provider>
	)
}

export default App
