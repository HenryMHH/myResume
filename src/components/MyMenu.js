import { Box, List, ListItem, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { modalOpenContext } from '../context/modalOpenContext'
import { profolioList } from '../projectList'
import FakeIcon from './FakeIcon'
import { AiOutlineMenu } from 'react-icons/ai'

const StyledItem = styled(MenuItem)`
	font-size: 1rem;
	&:hover {
		background-color: rgb(220, 220, 220) !important;
	}

	&:focus {
		background-color: rgb(220, 220, 220) !important;
	}
`

export default function MyMenu() {
	const { setModalState, setDrawerState } = useContext(modalOpenContext)
	const [isScroll, setIsScroll] = useState(false)

	function triggerModal(index, type) {
		setModalState((pre) => (pre = { index: index, type: type }))
	}

	let widthWindow = window.innerWidth

	useEffect(() => {
		function widthSetter() {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			widthWindow = window.innerWidth
		}
		window.addEventListener('resize', widthSetter)
		return () => window.removeEventListener('resize', widthSetter)
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)
		function scrollHandler() {
			if (window.scrollY > 50) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		}
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [])

	return (
		<Box
			bg={isScroll ? 'rgba(255,255,255,1)' : 'transparent'}
			zIndex="5"
			w="100%"
			alignItems="center"
			pos="fixed"
			display="flex"
			justifyContent="space-between"
			fontSize="1.5em"
			p=".3em 1em"
			top="0"
			transition="all .3s ease"
			boxShadow={isScroll ? '2px 9px 17px -3px #000000' : 'none'}
		>
			<FakeIcon />
			{widthWindow <= 768 ? (
				<Box
					cursor="pointer"
					border="2px solid"
					borderColor="rgba(0,0,0,.7)"
					_hover={{ backgroundColor: 'rgba(0,0,0,.7)', color: 'rgb(240,240,240)', borderColor: 'rgb(240,240,240)' }}
					p=".5rem"
					borderRadius="10px"
					onClick={() => {
						setDrawerState('open')
					}}
				>
					<AiOutlineMenu />
				</Box>
			) : (
				<List display="flex" justifyContent="flex-end">
					{profolioList.map((items, j) => (
						<ListItem mx=".5em" key={j}>
							<Menu autoSelect="false">
								<MenuButton cursor="pointer" as={Box}>
									{items.title}+
								</MenuButton>
								<MenuList background="rgb(245,245,245)" borderRadius="3px">
									{items.project.map((item, i) => (
										<StyledItem key={i} onClick={() => triggerModal(i, items.title)}>
											{item.title}
										</StyledItem>
									))}
								</MenuList>
							</Menu>
						</ListItem>
					))}
				</List>
			)}
		</Box>
	)
}
