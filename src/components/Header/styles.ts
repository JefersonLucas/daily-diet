import styled from 'styled-components/native'
import logo from 'assets/logo.png'
import avatar from 'assets/avatar.png'

export const Container = styled.View`
	width: 100%;
	margin: 64px 0 32px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const Logo = styled.Image.attrs(() => ({ source: logo }))`
	width: 82px;
	height: 37px;
`

export const Avatar = styled.Image.attrs(() => ({ source: avatar }))`
	width: 40px;
	height: 40px;
`
