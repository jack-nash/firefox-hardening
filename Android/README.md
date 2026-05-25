## 📱 Guia de Instalação para Firefox no Android (EXPERIMENTAL!)

### 🔍 Crédito e Referência Original

Este guia é baseado no trabalho da comunidade Betterfox, especificamente:
- **Tradução/Adaptação:** @gunir (Issue #240)
- **Original:** @ndv92 (comunidade vietnamita Voz.vn)
- **Betterfox:** @yokoffing

🔗 **Referência:** [Betterfox Issue #240 - How to install Betterfox on Android Firefox using adb](https://github.com/yokoffing/Betterfox/issues/240)

---

### ⚠️ **ATENÇÃO:**

1. **`user.js` funciona em qualquer versão** (incluindo Stable) - mas `about:config` para verificação **NÃO** funciona no Stable.
2. **Acesso ao `about:config` no Stable:** Use `chrome://geckoview/content/config.xhtml`
3. **`policies.json` NÃO é mencionado no guia original** - é experimental e NÃO recomendado para Android.
4. **Método de verificação alternativo:** Use `about:support` → "Important Modified Preferences"
5. **Para dispositivos com root:** Basta copiar `user.js` para `/data/data/org.mozilla.xxx/files/mozilla/` (permissão 777)

---

### 🔧 Pré-requisitos

### 1. No Celular (Android)

| Item | Ação |
|------|------|
| **Firefox (qualquer versão)** | Stable, Beta, Nightly, Fennec, IronFox |
| **Modo Desenvolvedor** | Ative em Configurações → Sobre o telefone → Toque 7x em "Número da compilação" |
| **Depuração USB** | Configurações → Opções do desenvolvedor → Ativar |
| **Depuração Remota no Firefox** | Firefox → Configurações → Sobre o Firefox → Toque no logo 5x → Configurações Avançadas → Ativar "Depuração remota via USB" |

### 2. No PC

Baixe o **Platform Tools** do Android:  
🔗 [Download Android Platform Tools](https://developer.android.com/studio/releases/platform-tools)

> Lembrando que você precisa dos drivers do seu aparelho instalado. Não recomendo os drivers genéricos da Google.

Extraia para:
- **Windows:** `C:\platform-tools\`
- **Linux:** `/usr/local/bin/` ou mantenha na pasta
- **macOS:** `/usr/local/bin/` ou mantenha na pasta

---

### 🚀 Método Único: Instalação do `user.js` (via Console)

⚠️ **ATENÇÃO:** Este método NÃO copia o arquivo fisicamente. Ele executa as configurações no console do inspetor.

### Passo a Passo:

1. **Conecte o celular ao PC via USB**

2. **Abra o terminal/CMD no PC e verifique a conexão:**

```
adb devices
```

### Saída esperada:

```
List of devices attached
XXXXXXXXXXXXXX    device
```

### 3. Abra o Firefox no celular

### 4. No Firefox do PC, digite na barra de endereço:

```
about:debugging
```

### 5. Clique em "Configurar USB" → marque seu dispositivo → "Conectar"

### 6. No celular, digite na barra de endereço:

```
about:support
```

### 7. No PC, no about:debugging, localize a aba about:support (fica dentro dos menus depois de clicar no seu dispositivo) e clique em "Inspecionar"

### 8. No inspetor que abrir, vá na aba "Console"

### 9. Copie e cole a função auxiliar no console:

```
var user_pref = function(pref, val){
  try {
    if(typeof val == "string"){
         Services.prefs.setStringPref(pref, val);    
    }
    else if(typeof val == "number"){
         Services.prefs.setIntPref(pref, val);    
    }
    else if(typeof val == "boolean"){
         Services.prefs.setBoolPref(pref, val);    
    }
  } catch(e){
    console.log("pref:" + pref + " val:" + val + " e:" + e);
  }
}
```

### 10. Copie TODO o conteúdo do arquivo user.js e cole no console → pressione Enter

### 11. Pronto! Verifique no celular:

Método A (Firefox Beta/Nightly/Fennec/IronFox):

```
about:config
```

Procure por webgl.disabled → deve estar false

Método B (Firefox Stable - sem about:config nativo):

```
chrome://geckoview/content/config.xhtml
```

Ou verifique em about:support → "Important Modified Preferences"

> 💡 Dica: O `about:support` mostra as configurações modificadas mesmo no Stable, conforme descoberto por @ghost no issue #240.

### ❌ Removendo as Configurações

### Remover user.js (configurações aplicadas via console):

Não há arquivo físico. Para reverter:

### Método 1 (recomendado):

    Acesse about:config (ou chrome://geckoview/content/config.xhtml)

    Busque pelas configurações alteradas

    Clique no ícone de reset (⟳) em cada uma

### Método 2 (nuclear):

    Reinstale o Firefox

### Método 3 (root apenas):

    Remova o arquivo user.js da pasta do perfil

### 🔍 Resolução de Problemas

| Problema | Solução (conforme issue #240) |
| :--- | :--- |
| `adb devices` não mostra o celular | Verifique drivers USB e depuração USB |
| `about:config` não carrega/vazio | **Normal no Stable.** Use `chrome://geckoview/content/config.xhtml` (descoberto por @furdiburd) |
| Console mostra `Services is not defined` | Você está na aba errada. Precisa ser `about:support` inspecionada (confirmado por @gunir) |
| Não consegue verificar se funcionou | Use `about:support` → "Important Modified Preferences" (descoberto por @ghost) |
| Mudanças não persistem | Verifique se executou a função `user_pref` **ANTES** de colar as configurações |
| Firefox não inicia após aplicar | Use `about:support` → botão "Refresh Firefox" (limpa todas as configurações) |
| Root disponível | Copie `user.js` direto para `/data/data/org.mozilla.xxx/files/mozilla/` com permissão **777** (descoberto por @rawracli) |

### 📊 Compatibilidade por Versão

| Versão | `user.js` via console | `about:config` nativo | `chrome://geckoview/...` | `about:support` verificação |
| :--- | :---: | :---: | :---: | :---: |
| **Nightly** | ✅ | ✅ | ✅ | ✅ |
| **Beta** | ✅ | ✅ | ✅ | ✅ |
| **Stable** | ✅ | ❌ (vazio) | ✅ | ✅ |
| **Fennec (F-Droid)** | ✅ | ✅ | ✅ | ✅ |
| **IronFox** | ✅ | ✅ | ✅ | ✅ |

### 🎯 Recomendações Finais

| Cenário | Recomendação | Justificativa |
| :--- | :--- | :--- |
| **Usuário casual** | Apenas `user.js` no Beta/Nightly | `about:config` acessível para verificação |
| **Usuário que quer Stable** | `user.js` + `chrome://geckoview/...` | Precisa do workaround para verificar |
| **Usuário avançado com root** | Copiar `user.js` direto | Mais rápido, sem necessidade de ADB |
| **Máxima privacidade** | IronFox + `user.js` | Fork já hardened + suas customizações |
| **Testar antes de aplicar** | Use o `about:debugging` em outra aba | Pode testar configurações sem comprometer o perfil |

### 📝 Notas Importantes

### 1.  O policies.json NÃO é recomendado

    Não mencionado no guia original do Betterfox

    Implementação no Android é instável e não documentada

    Recomendação: Use apenas user.js

### 2. Firefox Stable tem limitações

    about:config está vazio propositalmente (decisão da Mozilla)

    Solução: Use chrome://geckoview/content/config.xhtml

    Verificação via about:support → "Important Modified Preferences"

### 3. Sincronização com Firefox Desktop

    Se você sincroniza configurações via Firefox Account, algumas prefs podem ser sobrescritas

    Solução: Use services.sync.prefs.sync.* para controlar o que sincroniza

### 4. Performance no Android

    Configurações de rolagem do Betterfox (Smoothfox) não têm efeito no Android

    Android usa sistema de curva próprio: apz.android.chrome_fling_physics.*

    Recomendação: Use as configurações específicas para Android no seu user.js

### 5. Verificação Visual

    Se não confia no console, use about:support → "Important Modified Preferences"

    As configurações aplicadas aparecerão lá mesmo no Stable

### 🔧 Configurações Específicas para Android

```
// ==========================================
// Otimizações específicas para Android
// ==========================================

// Ajuste de rolagem (valores padrão do Betterfox para Android)
user_pref("apz.android.chrome_fling_physics.friction", 0.040);
user_pref("apz.android.chrome_fling_physics.inflexion", 0.70);

// Evita sincronização problemática de prefs (descoberto por @Adhjie)
user_pref("services.sync.prefs.dangerously_allow_arbitrary", false);

// Cache otimizado para mobile
user_pref("browser.cache.disk.capacity", 262144);  // 256 MB
user_pref("browser.cache.memory.capacity", 65536);  // 64 MB
```

### 📝 Comandos Rápidos (Referência)

Verificar conexão

```
adb devices
```

Forçar fechamento do Firefox (todas versões)

```
adb shell am force-stop org.mozilla.firefox        # Stable
adb shell am force-stop org.mozilla.firefox_beta   # Beta
adb shell am force-stop org.mozilla.fenix          # Nightly
adb shell am force-stop org.mozilla.fennec_fdroid  # Fennec
adb shell am force-stop org.ironfox                # IronFox
```

Abrir Firefox (todas versões)

```
adb shell am start -n org.mozilla.firefox/.App              # Stable
adb shell am start -n org.mozilla.firefox_beta/.App         # Beta
adb shell am start -n org.mozilla.fenix/.App                # Nightly
adb shell am start -n org.mozilla.fennec_fdroid/.App        # Fennec
adb shell am start -n org.ironfox/.App                      # IronFox
```

Método alternativo (root apenas) - copiar user.js direto

```
adb root
adb shell mkdir -p /data/data/org.mozilla.firefox/files/mozilla/
adb push user.js /data/data/org.mozilla.firefox/files/mozilla/prefs.js
adb shell chmod 777 /data/data/org.mozilla.firefox/files/mozilla/prefs.js
```
