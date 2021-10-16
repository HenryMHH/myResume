import { Box } from '@chakra-ui/layout'
import React from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'

export default function FakeIcon() {
	return (
		<Box display="flex" fontWeight="bold" fontSize="1.5em" my=".2rem" mx=".5rem" whiteSpace="nowrap">
			<Box transform="skewY(-10deg)" display="flex">
				<Box transform="rotate(4deg)">亨</Box>
				<Box transform="rotate(4deg)">利</Box>
			</Box>
			<Box transform="skewY(-10deg)" mt="-0.1em" display="flex">
				<Box transform="rotate(4deg)">履</Box>
				<Box transform="rotate(4deg)">歷</Box>
			</Box>
			<Box>
				<Box fontSize="1.5rem" transform="skewY(-10deg)">
					<Box transform="rotate(70deg)  translateX(5px)" translateY="">
						<IoDocumentTextOutline />
					</Box>
				</Box>
				<Box fontSize=".5rem" transform="skewY(-10deg) scale(.7)" ml=".2rem" mt="-0.5rem">
					<Box>我已經</Box>
					<Box>沒梗了</Box>
				</Box>
			</Box>
		</Box>
	)
}
