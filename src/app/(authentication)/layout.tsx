import { ReactNode } from "react";
import * as S from "./layout.styles";
import Image from "next/image";

interface AuthenticationProps {
	children: ReactNode;
}

function AuthenticationLayout(props: AuthenticationProps) {
	return (
		<S.AuthenticationContainer>
			<S.Form>
				<Image
					src="/images/svg/mariella.svg"
					width={169}
					height={45}
					alt="Mariella logo"
				/>
				{props.children}
			</S.Form>
		</S.AuthenticationContainer>
	);
}

export default AuthenticationLayout;
