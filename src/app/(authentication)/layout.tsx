import { ReactNode } from "react";
import * as S from "./layout.styles";

interface AuthenticationProps {
	children: ReactNode;
}

function AuthenticationLayout(props: AuthenticationProps) {
	return (
		<S.AuthenticationContainer>{props.children}</S.AuthenticationContainer>
	);
}

export default AuthenticationLayout;
