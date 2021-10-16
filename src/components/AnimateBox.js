import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Box } from '@chakra-ui/layout'
import { MemoedCard } from './Card'
import { modalOpenContext } from '../context/modalOpenContext'

const AnimateBox = styled(Box)`
	transition: flex 0.4s ease-in-out 0.1s, font-size 0.4s ease-in-out 0.1s;
	padding: 5rem 1.5rem 0;
	font-size: 3vw;
	flex: 1;
	@media (max-width: 600px) {
		font-size: 8vw;
	}

	&.active {
		font-size: 8vw;
		flex: 3;
		background: rgb(239, 240, 240);

		@media (min-width: 1100px) {
			font-size: 110px;
		}
	}
`

export default function AnimateComponent({ columnIndex, hoverIndex, setHoverIndex, data }) {
	useEffect(() => {
		let doit
		const observer = new ResizeObserver((evt) => {
			let target = evt[0].target
			let width = evt[0].target.offsetWidth
			let childrenList = Array.from(target.children)
			if (width <= 600) {
				clearTimeout(doit)
				doit = setTimeout(() => {
					for (let i = 0; i < childrenList.length; i++) {
						childrenList[i].style.width = '100%'
						childrenList[i].style.left = 0
						childrenList[i].style.top = `${i * 300 + 15 * i + 1}px`
					}
				}, 10)
			}
			if (width > 600) {
				clearTimeout(doit)
				doit = setTimeout(() => {
					let indexx = []
					let column = Math.round(width / 270) - 1
					let row = Math.ceil(childrenList.length / column) || 1

					for (let j = 0; j < Array(row).length; j++) {
						for (let i = 0; i < Array(column).length; i++) {
							indexx.push({ columnIndex: i, rowIndex: j })
						}
					}
					for (let i = 0; i < childrenList.length; i++) {
						if (childrenList[i]) {
							childrenList[i].style.width = '300px'
							childrenList[i].style.left = `${315 * indexx[i].columnIndex}px`
							childrenList[i].style.top = `${315 * indexx[i].rowIndex}px`
						}
					}
				}, 50)
			}
		})

		observer.observe(document.getElementById(`target-${columnIndex}`))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<AnimateBox className={hoverIndex === columnIndex ? 'active' : null} onMouseEnter={() => setHoverIndex(columnIndex)}>
			<Box fontFamily="Noto Sans TC" fontWeight="700">
				{data.title}
			</Box>
			<Box w="100%" minW="200px" minH="90%" h={data ? data.project.length * 450 : 0} id={`target-${columnIndex}`} position="relative" transition="all 0.3s ease" margin-bottom="auto">
				{data.project.map((item, i) => {
					return <MemoedCard key={i} item={item} index={i} type={data.title} />
				})}
			</Box>
		</AnimateBox>
	)
}
