## 🔥 Firefox Hardening - Configuração Avançada

[![Baseado no Betterfox](https://img.shields.io/badge/Baseado%20em-Betterfox-ff6600.svg)](https://github.com/yokoffing/Betterfox)
[![Firefox 140+](https://img.shields.io/badge/Firefox-140%2B-ff7139.svg)](https://www.mozilla.org/firefox)
[![Licença MIT](https://img.shields.io/badge/Licença-MIT-blue.svg)](LICENSE)

> Uma configuração do Firefox que equilibra **privacidade**, **performance** e **usabilidade**

**Versões suportadas:** Firefox 140+ (ESR) | 150+ (Stable)

**Aviso**

As configurações são personalizadas para meu uso, se quiser e souber o que está fazendo, abra o arquivo num editor
de texto e modifique o que quiser. O user.js aceita comentários e tem certa tolerância a falta de formatação, o
policies.json precisa de formatação específica e não aceita comentários.

### 📦 O que está incluso?

| Arquivo | Função | Mutável pelo usuário? |
| :--- | :--- | :---: |
| **`user.js`** | Configurações de `about:config` (privacidade, performance, fingerprinting) | ✅ Sim |
| **`policies.json`** | Políticas forçadas (telemetria, extensões, mecanismos de busca) | ❌ Não (protegido) |

**Recomendo a leitura:** [DNS como configurar?](https://github.com/jack-nash/firefox-hardening/blob/main/DNS.md)

Lembrando que você pode configurar no roteador, a nível de sistema ou no navegador (user e policies ou nas opções).

Inclusive usando DNS para diferentes cenários (pode causar lentidão).

### ⚙️ Diferenças vs. Betterfox (yokoffing)

### `user.js`

| Configuração | Betterfox | **Este Projeto** | Motivo |
| :--- | :--- | :--- | :--- |
| **WebGL** | Desativado | ✅ Ativado + proteção | Mapas 3D, Figma, jogos funcionam com fingerprint mascarado |
| **WebRTC** | Restrito | ✅ Ativado (IP protegido) | Google Meet, Zoom, Discord funcionam |
| **DNS sobre HTTPS** | Modo 3 (Estrito) | Modo 2 (Fallback) | Compatível com redes corporativas/VPNs |
| **Cache em Disco** | Desativado | ✅ Ativado (500 MB) | Sites frequentes carregam instantaneamente |
| **Favicons** | Desativado | ✅ Ativado | Identificação visual de abas |
| **Proteção antimalware** | Desativada | ✅ Ativada | Segurança > Fingerprinting |
| **ResistFingerprinting** | Parcial | ✅ Completo (letterboxing) | Uniformiza resolução de tela e fingerprints |
| **Accept Header** | Padrão | ✅ Normalizado | Reduz fingerprint único |

### `policies.json`

| Aspecto | Decisão | Porquê |
| :--- | :--- | :--- |
| **WebsiteFilter** | ❌ Removido | Quebrava extensões, pouco benefício |
| **Ícones** | 🌐 URLs web | Confiável, leve, serviços privados |
| **DisableSetDesktopBackground** | `false` | Funcionalidade restaurada |
| **Description** | 🇧🇷 Português | Melhor experiência para usuários BR |
| **Alias** | ✅ Adicionado | Atalhos como `@sxng` na barra de endereço |

### 📥 Instalação

### ✅ Recomendação: Firefox Extended Support Release (ESR)

🔗 [Baixar Firefox ESR](https://www.mozilla.org/pt-BR/firefox/enterprise/)

### A versão ESR é mais estável e recebe apenas atualizações de segurança, ideal para quem quer um ambiente consistente.

### 1. Baixe os arquivos
- [`user.js`](./user.js)
- [`policies.json`](./policies.json)

### 2. Localize as pastas

**Para o arquivo `user.js`:**

**MÉTODO 1 (via about:profiles):**
   1. Digite "about:profiles" na barra de endereços
   2. Localize seu perfil ativo (geralmente "default-release" ou "default")
   3. Clique em "Abrir Pasta" no "Root Directory"
   4. Cole o arquivo user.js dentro da pasta que abriu
   5. Reinicie o Firefox

**MÉTODO 2 (via about:support - RECOMENDADO):**
   1. Digite "about:support" na barra de endereços
   2. Procure por "Pasta de Perfil" (Profile Directory)
   3. Clique em "Abrir Pasta"
   4. Cole o arquivo user.js
   5. Reinicie o Firefox

**Caminhos diretos por SO:**

| Arquivo | Pasta de destino |
| :--- | :--- |
| **`user.js`** | Pasta do perfil (`about:profiles` → Root Directory) |
| **`policies.json`** | `C:\Program Files\Mozilla Firefox\distribution\` (Windows) |
| | `/usr/lib/firefox/distribution/` (Linux - Debian/Ubuntu) |
| | `/usr/lib64/firefox/distribution/` (Linux - Fedora/RHEL) |
| | `/opt/firefox/distribution/` (Linux - instalação manual) |
| | `/Applications/Firefox.app/Contents/Resources/distribution/` (macOS) |

### ⚠️ Para `policies.json`, crie a pasta `distribution` se não existir.

### 3. Cole os arquivos e reinicie o Firefox

### 4. Verificações pós-instalação

| Verificar | Como |
| :--- | :--- |
| Políticas aplicadas | `about:policies` → todas com status "Active" |
| Configurações carregadas | `about:config` → busque por `privacy.resistFingerprinting` (deve ser `true`) |
| Extensões instaladas | `about:addons` → uBlock Origin deve estar presente |
| Mecanismos de busca | Barra de endereço → digite `@` para ver os atalhos |

### Atalhos dos mecanismos de busca (digite `@` na barra + atalho)

| Atalho | Mecanismo |
| :--- | :--- |
| `@ddgl` | DuckDuckGo Lite |
| `@sxng` | SearXNG |
| `@metager` | MetaGer |
| `@startpage` | StartPage |

### 📋 O que cada arquivo faz?

### `user.js` (configurações de usuário)
- 🛡️ Proteção contra fingerprinting (+ de 80% dos vetores bloqueados)
- 🖥️ Letterboxing ativo (resolução de tela uniformizada)
- 🚀 Otimizações de cache (disco 500MB, memória 128MB)
- 🔒 Telemetria desativada
- ✅ WebGL/WebRTC funcionando com IP protegido e fingerprints mascarados
- 🎨 Aceleração GPU forçada
- 📡 Accept Header normalizado (reduz fingerprint único)

### `policies.json` (políticas empresariais)
- 📊 Telemetria bloqueada em nível de sistema
- 🧩 Instalação forçada de uBlock Origin (travado)
- 🔎 Mecanismo padrão: DuckDuckGo + 3 alternativas privadas
- 📑 Remove favoritos e mecanismos padrão (Amazon, Bing, eBay, Google)
- 🔐 Permissões de câmera/microfone/localização bloqueadas globalmente
- 🛡️ Proteção contra rastreamento em nível máximo (travada)

### 🆚 Resumo: qual arquivo usar? Spoiler: ambos!

| Funcionalidade | `policies.json` | `user.js` |
| :--- | :---: | :---: |
| Forçar instalação de extensão (uBlock) | ✅ | ❌ |
| Remover buscador padrão | ✅ | ❌ |
| Bloquear fingerprinting avançado | ❌ | ✅ |
| Letterboxing / RFP | ❌ | ✅ |
| Configurar cache/performance | ❌ | ✅ |
| Desabilitar telemetria | ✅ (mais forte) | ✅ (redundante) |
| Bloquear permissões (câmera/geo) | ✅ | ❌ |
| Aceleração GPU | ❌ | ✅ |
| Normalizar Accept Header | ❌ | ✅ |

### ⚠️ Ordem de precedência (importante!)
- **Políticas** (policies.json) são **imutáveis** pelo usuário
- Algumas políticas com `"Locked": false` permitem que o `user.js` sobrescreva
- Exemplo: `DNSOverHTTPS.Locked: false` no `policies.json` permite o DoH configurado no `user.js`

### 🧪 Testes recomendados após instalação

| Teste | URL | O que esperar |
| :--- | :--- | :--- |
| WebRTC (IP oculto) | [browserleaks.com/webrtc](https://browserleaks.com/webrtc) | IP local não exposto |
| Fingerprinting | [coveryourtracks.eff.org](https://coveryourtracks.eff.org) | Bloqueio de rastreadores ✅ / Fingerprint **Alta proteção** |
| Screen Size | [coveryourtracks.eff.org](https://coveryourtracks.eff.org) | Resolução padronizada (letterboxing) |
| WebGL (deve funcionar) | [webglsamples.org](https://webglsamples.org/aquarium/aquarium.html) | Aquário 3D renderizando |
| Geolocalização | [maps.google.com](https://maps.google.com) | Deve perguntar permissão (ou negar automaticamente) |

### 🐛 Problemas conhecidos e soluções

| Problema | Solução |
| :--- | :--- |
| Site exige câmera/microfone | Acesse `about:config` → busque `permissions.default.camera` e `permissions.default.microphone` → mude para `0` ou `1` |
| WebGL não funciona em site específico | Verifique `webgl.disabled` = `false` e `webgl.enable-renderer-query` = `false` |
| DoH bloqueado pela rede | Altere `network.trr.mode` para `0` (desabilitado) ou `5` (desabilitado explicitamente) |
| Letterboxing incomoda visualmente | Desative `privacy.resistFingerprinting.letterboxing` (mantenha RFP ativo) |
| Banco exige timezone local | Timezone já está preservado (padrão). Se ativou UTC, descomente a linha no `user.js` |

### 📜 Licença

MIT - Use e modifique à vontade. Mantenha os créditos se possível.

### 🙏 Créditos e Agradecimentos

- **[Betterfox](https://github.com/yokoffing/Betterfox)** - Base para as configurações de segurança, desempenho e suavização.
- **[arkenfox](https://github.com/arkenfox/user.js)** - Inspiração contínua para práticas de privacidade no Firefox.
- **[Mozilla](https://www.mozilla.org/pt-BR/)** - Por criar um navegador que pode ser verdadeiramente personalizado (mesmo merecendo críticas por certas decisões recentes).

⭐ **Se este projeto ajudou você, considere dar uma estrela no GitHub!**

🚀 **Navegação rápida e privada — do jeito que deveria ser.**
