// import { FOOTER_LINKS } from "../constants";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#d4d4d8"
                        refresh
                    />
                    <div className="flex flex-col items-start max-w-48">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-5 h-5" />
                            <span className="text-xl font-medium">
                                Luro
                            </span>
                        </div>
                        <p className="text-base max-w mt-4">
                            Empower your business with our AI tools.
                        </p>
                        <Button className="mt-8">
                            <Link href="/app">
                                Start for free
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
                        {/* Footer links removed as requested */}
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-between relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} Luro. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="p-1">
                            <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                    </div>
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer
