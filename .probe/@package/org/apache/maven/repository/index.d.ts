export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        setPassword(arg0: string): void;
        getPassword(): string;
        getUserName(): string;
        setHost(arg0: string): void;
        setPort(arg0: number): void;
        getProtocol(): string;
        getHost(): string;
        getPort(): number;
        setProtocol(arg0: string): void;
        getNonProxyHosts(): string;
        setNtlmHost(arg0: string): void;
        getNtlmHost(): string;
        getNtlmDomain(): string;
        setNonProxyHosts(arg0: string): void;
        setUserName(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
