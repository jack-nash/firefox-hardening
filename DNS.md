### DNS sobre HTTPS (DoH) - Opções para Firefox

### [Lista de DNS conhecidos](https://adguard-dns.io/kb/general/dns-providers/)

**Configuração base:**

```
user_pref("network.trr.mode", 2);  // 0=desabilitado, 2=fallback, 3=estrito
user_pref("network.trr.excluded-domains", "");
user_pref("network.trr.early-AAAA", false);
```

⚠️ **Importante:** Adicione APENAS o par (`uri` + `custom_uri` mais abaixo) do provedor escolhido.

Exemplo:

```
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.excluded-domains", "");
user_pref("network.trr.early-AAAA", false);
```

### 🕵️ O que são os "Eyes" (Olhos)?

Os **"Eyes"** (Olhos) são alianças de inteligência entre países que compartilham dados de vigilância, incluindo tráfego de internet, comunicações e metadados de DNS.

### 🤔 Por que isso importa?

Quando você usa um provedor DNS, todas as suas navegações na web passam por ele — cada site que você visita, cada aplicativo que se conecta à internet. Na prática, o DNS sabe toda a sua jornada digital.

## 📜 Resumo histórico: O que são os "Eyes"?

| Aliança | Origem | Membros | Risco para DNS |
|:---|:---|:---|:---:|
| **5 Eyes** | 1946 (Tratado UKUSA, pós-Segunda Guerra) | 🇺🇸 EUA, 🇬🇧 Reino Unido, 🇨🇦 Canadá, 🇦🇺 Austrália, 🇳🇿 Nova Zelândia | 🔴 Muito Alto |
| **9 Eyes** | Pós-11 de setembro de 2001 (Guerra ao Terror) | 5 Eyes + 🇩🇰 Dinamarca, 🇫🇷 França, 🇳🇱 Países Baixos, 🇳🇴 Noruega | 🟠 Alto |
| **14 Eyes** | Décadas de 2000-2010 (revelações Snowden em 2013) | 9 Eyes + 🇩🇪 Alemanha, 🇧🇪 Bélgica, 🇪🇸 Espanha, 🇮🇹 Itália, 🇸🇪 Suécia | 🟡 Médio |

### ✅ Países "fora dos Eyes" (menor risco de vigilância em massa)

Suíça, Chipre, Estônia, Áustria, República Checa, Islândia, Singapura, Indonésia, Romênia, Luxemburgo.

> ⚠️ **Importante:** Estar fora dos "Eyes" **não é garantia absoluta** de privacidade. O provedor ainda pode manter logs, vender dados ou ter falhas de segurança. Porém, reduz **significativamente** o risco de vigilância governamental em massa e **subpoenas internacionais**.

> Subpoena (pronuncia-se "súpina") é uma ordem judicial que obriga uma pessoa ou empresa a entregar documentos, dados ou testemunhar em um tribunal. Quando essa ordem cruza fronteiras, chamamos de subpoena internacional ou assistência jurídica mútua.

### 📊 Tabela comparativa rápida

| Provedor | Velocidade | Privacidade | Bloqueio | Logs | Fora dos Eyes? |
|:---|:---:|:---:|:---|:---:|:---|
| **18Bit DNS** | ⚡⚡⚡ | ✅ Boa | ✅ Malware+Phishing | ❌ Nenhum | ❌ China |
| **360 Secure DNS** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Segurança | ❌ Desconhecido | ❌ China |
| **AdGuard DNS (Default)** | ⚡⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Rastreadores+Phishing | ❌ Nenhum | ✅ Chipre |
| **AdGuard DNS (Family)** | ⚡⚡⚡⚡ | ✅ Excelente | ✅ Conteúdo Adulto + Default | ❌ Nenhum | ✅ Chipre |
| **AdGuard DNS (Unfiltered)** | ⚡⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Chipre |
| **AhaDNS** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios (opcional) | ❌ Nenhum | ✅ Países Baixos/EUA |
| **Ali DNS** | ⚡⚡⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ❌ China |
| **Applied Privacy DNS** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Áustria (fora) |
| **Arapurayil** | ⚡⚡ | ✅ Excelente | ✅ Anúncios+Rastreadores+Phishing | ❌ Nenhum | ❌ Índia |
| **ASTRACAT DNS** | ⚡⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ❌ EUA (Cloudflare) |
| **BebasDNS (Default)** | ⚡⚡⚡ | ✅ Boa | ✅ Anúncios+Malware+Phishing | ❌ Nenhum | ✅ Indonésia (fora) |
| **BebasDNS (Family)** | ⚡⚡⚡ | ✅ Boa | ✅ Adulto + Malware + Phishing | ❌ Nenhum | ✅ Indonésia (fora) |
| **BebasDNS (OISD/Hagezi)** | ⚡⚡⚡ | ✅ Boa | ✅ Customizável | ❌ Nenhum | ✅ Indonésia (fora) |
| **BebasDNS (Security)** | ⚡⚡⚡ | ✅ Boa | ✅ Malware+Phishing | ❌ Nenhum | ✅ Indonésia (fora) |
| **BebasDNS (Unfiltered)** | ⚡⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ Indonésia (fora) |
| **BlackMagicc DNS** | ⚡⚡ | ✅ Boa | ✅ Anúncios+Adulto+Malware | ❌ Nenhum | ❌ Vietnã |
| **ByteDance Public DNS** | ⚡⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ❌ China |
| **Caliph DNS** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ Indonésia (fora) |
| **Captnemo DNS** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ❌ Índia |
| **CERT-EE** | ⚡⚡⚡ | ✅ Excelente | ✅ Malware+Phishing | ❌ Nenhum | ✅ Estônia (fora) |
| **CFIEC Public DNS** | ⚡⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ❌ China |
| **CIRA Canadian Shield (Family)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Adulto + Malware | ❌ Nenhum | ❌ Canadá (5 Eyes) |
| **CIRA Canadian Shield (Private)** | ⚡⚡⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ❌ Canadá (5 Eyes) |
| **CIRA Canadian Shield (Protected)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Malware+Phishing | ❌ Nenhum | ❌ Canadá (5 Eyes) |
| **Cisco OpenDNS (FamilyShield)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Conteúdo Adulto | 24h (anônimo) | ❌ EUA (5 Eyes) |
| **Cisco OpenDNS (Sandbox)** | ⚡⚡⚡⚡ | ✅ Boa | ❌ Nenhum | 24h (anônimo) | ❌ EUA (5 Eyes) |
| **Cisco OpenDNS (Standard)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Malware | 24h (anônimo) | ❌ EUA (5 Eyes) |
| **CleanBrowsing (Adult Filter)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Adulto+Malware | ❌ Opcional | ❌ EUA (5 Eyes) |
| **CleanBrowsing (Family Filter)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Adulto+Proxy+Malware | ❌ Opcional | ❌ EUA (5 Eyes) |
| **CleanBrowsing (Security Filter)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Malware+Phishing | ❌ Opcional | ❌ EUA (5 Eyes) |
| **Cloudflare (Malware)** | ⚡⚡⚡⚡⚡ | ✅ Boa | ✅ Malware | 24h | ❌ EUA (5 Eyes) |
| **Cloudflare (Malware+Adulto)** | ⚡⚡⚡⚡⚡ | ✅ Boa | ✅ Malware+Adulto | 24h | ❌ EUA (5 Eyes) |
| **Cloudflare (Standard)** | ⚡⚡⚡⚡⚡ | ✅ Boa | ❌ Nenhum | 24h | ❌ EUA (5 Eyes) |
| **Comodo Secure DNS** | ⚡⚡⚡ | ✅ Boa | ✅ Anúncios+Spyware+Phishing | ❌ Desconhecido | ❌ EUA (5 Eyes) |
| **Comss.one DNS** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Geo-bypass + Segurança | ❌ Desconhecido | ❌ Rússia |
| **Control D (Malware)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Malware | ❌ Opcional | ❌ Canadá (5 Eyes) |
| **Control D (Malware+Ads)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Malware+Anúncios | ❌ Opcional | ❌ Canadá (5 Eyes) |
| **Control D (Unfiltered)** | ⚡⚡⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Opcional | ❌ Canadá (5 Eyes) |
| **CZ.NIC ODVR** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ República Checa (fora) |
| **DeCloudUs DNS** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Malware+Phishing | ❌ Nenhum | ❌ Alemanha (14 Eyes) |
| **Digitale Gesellschaft DNS** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Suíça (fora) |
| **DNS for Family** | ⚡⚡⚡ | ✅ Boa | ✅ Conteúdo Adulto | ❌ Nenhum | ✅ Alemanha (14 Eyes) |
| **DNS Forge** | ⚡⚡⚡ | ✅ Boa | ✅ Anúncios | ❌ Nenhum | ✅ Alemanha (14 Eyes) |
| **DNS Privacy (getdnsapi)** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Múltiplos (fora) |
| **DNS Privacy (UncensoredDNS)** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Dinamarca (fora) |
| **DNS.SB** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Romênia (fora) |
| **DNS4EU (Protective)** | ⚡⚡⚡ | ✅ Excelente | ✅ Malware | ❌ Nenhum | ✅ UE (fora - GDPR) |
| **DNS4EU (Unfiltered)** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ UE (fora - GDPR) |
| **DNSGuard** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Malware | ❌ Nenhum | ✅ Alemanha (14 Eyes) |
| **DNSPod Public DNS+** | ⚡⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ❌ China |
| **DNSWatchGO** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Malware | ❌ Desconhecido | ❌ EUA (5 Eyes) |
| **dnswarden** | ⚡⚡ | ✅ Excelente | ❌ Nenhum (ou opcional) | ❌ Nenhum | ✅ Desconhecido |
| **Dyn DNS** | ⚡⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ❌ EUA (5 Eyes) |
| **FFMUC DNS** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Alemanha (14 Eyes) |
| **Fondation Restena DNS** | ⚡⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ Luxemburgo (fora) |
| **Freenom World** | ⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ❌ Países Baixos (14 Eyes) |
| **fvz DNS** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ❌ Múltiplos |
| **Google DNS** | ⚡⚡⚡⚡⚡ | ❌ Ruim | ❌ Nenhum | ✅ Permanente | ❌ EUA (5 Eyes) |
| **HaGeZi DNS** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Malware+Phishing | ❌ Nenhum | ✅ Alemanha/Finlândia (14 Eyes) |
| **Hurricane Electric** | ⚡⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ❌ EUA (5 Eyes) |
| **ibksturm DNS** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ Alemanha (14 Eyes) |
| **IIJ.JP DNS** | ⚡⚡⚡ | ✅ Boa | ✅ Abuso infantil | ❌ Desconhecido | ❌ Japão |
| **JupitrDNS** | ⚡⚡⚡ | ✅ Excelente | ✅ Malware | ❌ Nenhum | ❌ Múltiplos |
| **Lelux DNS** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ Finlândia (14 Eyes) |
| **LibreDNS** | ⚡⚡⚡ | ✅ Excelente | ❌ (ou opcional) | ❌ Nenhum | ✅ Alemanha (14 Eyes) |
| **Marbled Fennec** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ Múltiplos |
| **Mullvad (Adblock)** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios | ❌ Nenhum | ❌ Suécia (9 Eyes) |
| **Mullvad (All filters)** | ⚡⚡⚡ | ✅ Excelente | ✅ Completo | ❌ Nenhum | ❌ Suécia (9 Eyes) |
| **Mullvad (Base)** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Malware | ❌ Nenhum | ❌ Suécia (9 Eyes) |
| **Mullvad (Extended)** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Malware+Redes | ❌ Nenhum | ❌ Suécia (9 Eyes) |
| **Mullvad (Family)** | ⚡⚡⚡ | ✅ Excelente | ✅ Adulto+Gambling+Malware | ❌ Nenhum | ❌ Suécia (9 Eyes) |
| **Mullvad (Unfiltered)** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ❌ Suécia (9 Eyes) |
| **Nawala DNS** | ⚡⚡⚡ | ✅ Boa | ✅ Conteúdo Adulto | ❌ Nenhum | ✅ Indonésia (fora) |
| **Neustar (Family)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Adulto + Malware | ❌ Desconhecido | ❌ EUA (5 Eyes) |
| **Neustar (Threat)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Malware | ❌ Desconhecido | ❌ EUA (5 Eyes) |
| **Neustar (Unfiltered)** | ⚡⚡⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Desconhecido | ❌ EUA (5 Eyes) |
| **NextDNS (Anycast)** | ⚡⚡⚡⚡ | ✅ Boa | ✅ Customizável | ❌ Opcional | ✅ Suíça (fora) |
| **NWPS.fi DNS** | ⚡⚡⚡ | ✅ Boa | ✅ Anúncios+Malware | ❌ Nenhum | ✅ Finlândia (14 Eyes) |
| **OneDNS** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Malware (ou Adulto) | ❌ Desconhecido | ❌ China |
| **OpenBLD.net DNS** | ⚡⚡⚡ | ❌ Média | ✅ Anúncios+Malware | ⚠️ 24-48h | ❌ Múltiplos |
| **OpenNIC DNS** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ Múltiplos (fora) |
| **OSZX DNS** | ⚡⚡ | ✅ Boa | ✅ Anúncios | ❌ Nenhum | ✅ França (fora) |
| **Privacy-First DNS** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Malware | ❌ Nenhum | ✅ Singapura/Japão (fora) |
| **PumpleX** | ⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ✅ França (fora) |
| **Quad9 (ECS)** | ⚡⚡⚡⚡ | ✅ Excelente | ✅ Malware+Phishing | ❌ Nenhum | ✅ Suíça (fora) |
| **Quad9 (Standard)** | ⚡⚡⚡⚡ | ✅ Excelente | ✅ Malware+Phishing | ❌ Nenhum | ✅ Suíça (fora) |
| **Quad9 (Unsecured)** | ⚡⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Suíça (fora) |
| **Quad101** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Taiwan |
| **Quadrant Security** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Múltiplos |
| **Rabbit DNS** | ⚡⚡⚡ | ✅ Excelente | ❌ (ou opcional) | ❌ Nenhum | ✅ Múltiplos |
| **RethinkDNS** | ⚡⚡⚡ | ✅ Excelente | ✅ Customizável | ❌ Nenhum | ❌ EUA (5 Eyes) |
| **Safe DNS** | ⚡⚡⚡ | ❌ Desconhecida | ❌ Nenhum | ❌ Desconhecido | ✅ Múltiplos |
| **Safe Surfer** | ⚡⚡⚡ | ✅ Boa | ✅ 50+ categorias | ❌ Nenhum | ✅ Nova Zelândia (fora) |
| **Seby DNS** | ⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Alemanha (14 Eyes) |
| **SkyDNS RU** | ⚡⚡⚡ | ❌ Ruim | ✅ Customizável | ⚠️ Possível | ❌ Rússia |
| **Surfshark DNS** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ❌ Países Baixos (14 Eyes) |
| **SWITCH DNS** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Suíça (fora) |
| **uBlock DNS** | ⚡⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Rastreadores | ❌ Nenhum | ✅ Descentralizado |
| **UK DNS Privacy Project** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ❌ Reino Unido (5 Eyes) |
| **v.recipes DNS** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Machine Learning | ⚠️ Temporário | ❌ Múltiplos |
| **Verisign Public DNS** | ⚡⚡⚡⚡ | ✅ Boa | ❌ Nenhum | ❌ Nenhum | ❌ EUA (5 Eyes) |
| **Wikimedia DNS** | ⚡⚡⚡ | ✅ Excelente | ❌ Nenhum | ❌ Nenhum | ✅ Múltiplos (fora) |
| **Xstl DNS** | ⚡⚡⚡ | ✅ Excelente | ✅ Anúncios+Rastreadores | ❌ Nenhum | ✅ Coreia do Sul (fora) |
| **Yandex (Basic)** | ⚡⚡⚡ | ❌ Ruim | ❌ Nenhum | ⚠️ Possível | ❌ Rússia |
| **Yandex (Family)** | ⚡⚡⚡ | ❌ Ruim | ✅ Adulto+Malware | ⚠️ Possível | ❌ Rússia |
| **Yandex (Safe)** | ⚡⚡⚡ | ❌ Ruim | ✅ Malware+Phishing | ⚠️ Possível | ❌ Rússia |
| **114DNS (Family)** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Adulto | ❌ Desconhecido | ❌ China |
| **114DNS (Normal)** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Anúncios | ❌ Desconhecido | ❌ China |
| **114DNS (Safe)** | ⚡⚡⚡ | ❌ Desconhecida | ✅ Malware+Phishing | ❌ Desconhecido | ❌ China |

### 🚀 Opção 1: Cloudflare (Recomendado para velocidade)

```
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.custom_uri", "https://cloudflare-dns.com/dns-query");
```

⚡ DNS mais rápido do mundo (1.1.1.1)

🔒 Privacidade: logs deletados em 24h, auditado anualmente pela KPMG

❌ Sem bloqueio de malware ou anúncios

⚠️ Sede: EUA (membro do 5 Eyes)

### 🛡️ Opção 2: Cloudflare com Bloqueio de Malware

```
user_pref("network.trr.uri", "https://security.cloudflare-dns.com/dns-query");
user_pref("network.trr.custom_uri", "https://security.cloudflare-dns.com/dns-query");
```

⚡ Mesma velocidade da Cloudflare padrão

✅ Bloqueia sites maliciosos, phishing e malware

🔒 Mesma política de privacidade (logs 24h)

⚠️ Sede: EUA (membro do 5 Eyes)

### 🇨🇭 Opção 3: Quad9 (Segurança + Privacidade - FORA DOS EYES)

```
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");
```

🛡️ Bloqueia malware, phishing e botnets

🔒 Não armazena logs de IP (política rigorosa)

✅ Fora do 5/9/14 Eyes (sede na Suíça)

🔗 Parceria com IBM e Packet Clearing House

### 🚫 Opção 4: uBlockDNS (Bloqueio de Anúncios - FORA DOS EYES)

```
user_pref("network.trr.uri", "https://my.ublockdns.com/SEU_ID");
user_pref("network.trr.custom_uri", "https://my.ublockdns.com/SEU_ID");
```

✅ Bloqueia anúncios, rastreadores, malware e phishing

🔒 Zero logs - política de privacidade rigorosa

✅ Fora do 5/9/14 Eyes (descentralizado, sem sede única)

💰 Gratuito (não requer e-mail ou cadastro)

🔗 https://ublockdns.com/

💡 Como obter seu ID: Acesse https://ublockdns.com/ e gere seu ID personalizado. Substitua SEU_ID pelo valor gerado.

### 🔧 Opção 5: Mullvad DNS (Máxima Privacidade - FORA DOS EYES)

```
user_pref("network.trr.uri", "https://doh.mullvad.net/dns-query");
user_pref("network.trr.custom_uri", "https://doh.mullvad.net/dns-query");
```

🔒 Política de privacidade mais rigorosa (empresa de VPN sueca)

❌ Sem bloqueio padrão (mas suporta DNS-over-TLS)

✅ Fora do 5/9/14 Eyes (sede na Suécia)

🔗 https://mullvad.net/en/help/dns-over-https/

### ⚙️ Opção 6: Control D (Altamente Customizável)

Plano gratuito (servidores públicos)

```
user_pref("network.trr.uri", "https://freedns.controld.com/p0");
user_pref("network.trr.custom_uri", "https://freedns.controld.com/p0");
```

Com bloqueio de malware e anúncios

```
user_pref("network.trr.uri", "https://freedns.controld.com/p1");
user_pref("network.trr.custom_uri", "https://freedns.controld.com/p2");
```

✅ Bloqueio customizável via painel web (versão paga)

🔒 Logs opcionais (pode desativar)

⚠️ Sede: Canadá (membro do 5 Eyes)

🔗 https://controld.com/

### 🎛️ Opção 7: NextDNS (Máximo Controle - FORA DOS EYES)

```
user_pref("network.trr.uri", "https://dns.nextdns.io/SEU_ID");
user_pref("network.trr.custom_uri", "https://dns.nextdns.io/SEU_ID");
```

✅ Altamente customizável via painel web (bloqueios por categoria, allowlists, etc.)

🔒 Logs opcionais (pode desativar completamente)

📊 Estatísticas detalhadas (opcional)

💰 300.000 consultas/mês grátis (mais que suficiente para uso pessoal)

✅ Fora do 5/9/14 Eyes (sede na Suíça)

🔗 https://nextdns.io/

💡 Como obter seu ID: Crie uma conta gratuita em https://nextdns.io/ e configure seu perfil. O ID será fornecido no painel de configuração.

### 🔓 Opção 8: RethinkDNS (Open Source - FORA DOS EYES)

```
user_pref("network.trr.uri", "https://doh.rethinkdns.com/");
user_pref("network.trr.custom_uri", "https://doh.rethinkdns.com/");
```

✅ Completamente Open Source

✅ Bloqueia anúncios, rastreadores, malware e phishing

🔒 Zero logs

✅ Fora do 5/9/14 Eyes (descentralizado)

🔗 https://rethinkdns.com/

### 🏁 Qual escolher?
| Seu objetivo | Recomendação | Status Eyes |
|--------------|--------------|-------------|
| **Máxima velocidade** | Cloudflare | ⚠️ 5 Eyes |
| **Bloqueio de malware** | Quad9 | ✅ Fora dos Eyes |
| **Bloqueio de anúncios** | uBlockDNS ou RethinkDNS | ✅ Fora dos Eyes |
| **Máxima privacidade** | Mullvad DNS ou Quad9 | ✅ Fora dos Eyes |
| **Máximo controle** | NextDNS | ✅ Fora dos Eyes |
| **Equilíbrio (velocidade + bloqueio)** | uBlockDNS ou Quad9 | ✅ Fora dos Eyes |


### 🔧 Modos de operação (network.trr.mode)
| Modo | Valor | Descrição |
|------|-------|-----------|
| **Desabilitado** | `0` | Usa DNS do sistema (sem DoH) |
| **Fallback** | `2` | ✅ Recomendado - Tenta DoH, se falhar usa DNS padrão |
| **Estrito** | `3` | ❌ Apenas DoH (pode quebrar redes corporativas/WiFi público) |
| **Offline** | `5` | Desativa completamente |

⚠️ Para uso diário, mantenha mode = 2 (fallback). O modo estrito (3) pode quebrar redes com portais cativos (hotéis, aeroportos).

### 📋 Configuração final recomendada


### Configuração ideal para equilíbrio (usando uBlockDNS como exemplo)

```
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://my.ublockdns.com/SEU_ID");
user_pref("network.trr.custom_uri", "https://my.ublockdns.com/SEU_ID");
user_pref("network.trr.excluded-domains", "");
user_pref("network.trr.early-AAAA", false);
```
