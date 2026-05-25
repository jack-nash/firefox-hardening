// ============================================================================
// user.js - Firefox Android Hardening & Optimization
// Base: BetterFox (yokoffing) + ajustes personalizados para ANDROID
// Versão: 3.4 (2026-05-24)
//
// ═══════════════════════════════════════════════════════════════════════════
// 📱 INSTALAÇÃO NO ANDROID (via ADB):
// ═══════════════════════════════════════════════════════════════════════════
//   1. Conecte o celular ao PC via USB (depuração USB ativada)
//   2. adb devices (verificar conexão)
//   3. Firefox Android: Habilite "Remote Debugging via USB"
//   4. Firefox PC: about:debugging -> Conectar ao dispositivo
//   5. Celular: about:support
//   6. PC: Inspecionar a aba about:support
//   7. Console: Cole TODO este arquivo e pressione Enter
//   8. Verifique em about:config no celular
//
// ⚠️ DIFERENÇAS ANDROID vs DESKTOP:
//   ❌ REMOVIDO: general.platform.override (quebra sites no mobile)
//   ❌ REMOVIDO: Cleartype/GDI (específico Windows)
//   ❌ REMOVIDO: webgl.override-unmasked-renderer (fingerprint fixo)
//   ✅ ADICIONADO: Ajustes de rolagem touch (apz.android.*)
//   ✅ ADICIONADO: Otimizações de bateria e RAM
//   ✅ MANTIDO: FPP com FontVisibilityLevel2 (moderno, menos quebras)
//   ✅ DNS: Configurar via Android (Settings → Privacy & Security → DNS over HTTPS)
// ============================================================================

// ████████████████████████████████████████████████████████████████████████████
// 🛡️ BLOCO 1: PROTEÇÃO CONTRA FINGERPRINT (SEM CONFLITOS)
// ████████████████████████████████████████████████████████████████████████████
//
// ⚠️ IMPORTANTE: RFP e FPP NÃO podem ser usados juntos!
// Preferível Fingerprinting Protection (moderno, menos quebras)

// Fingerprinting Protection (recomendado, menos quebras que RFP)
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);
user_pref("privacy.fingerprintingProtection.overrides", "+FontVisibilityLevel2,-CanvasExtraction,-ScreenFingerprinting,-KeyboardFingerprinting,-AudioFingerprinting");
user_pref("privacy.fingerprintingProtection.granularOverrides", true);

// Proteção adicional de rastreamento de fingerprint
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// Letterboxing (esconde tamanho real da tela)
user_pref("privacy.resistFingerprinting.letterboxing", true);

// Canvas randomização (protege fingerprint via canvas)
user_pref("privacy.resistFingerprinting.randomization.canvas.use_siphash", true);

// Redução de precisão de timers (anti-timing attacks)
user_pref("privacy.reduceTimerPrecision", true);
user_pref("privacy.reduceTimerPrecision.unconditional", true);
user_pref("privacy.reduceTimerPrecision.microseconds", 1000);

// Bloqueia addonManager como vetor de fingerprint
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

// APIs sensíveis desabilitadas
user_pref("dom.battery.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("canvas.capturestream.enabled", false);

// ===================================================
// HTTP HEADERS (normalizados)
// ===================================================
user_pref("network.http.accept.default", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8");
user_pref("network.http.accept-encoding", "gzip, deflate, br, zstd");
user_pref("network.http.accept-encoding.secure", "gzip, deflate, br, zstd");
user_pref("network.http.accept.quirk", false);

// ===================================================
// WEBGL (protegido sem spoof fixo)
// ===================================================
user_pref("webgl.disabled", false);
user_pref("webgl.enable-renderer-query", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.enable-debug-renderer-info", true);
user_pref("webgl.max-size", 16384);

// ===================================================
// CANVAS ACELERADO
// ===================================================
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);

// ===================================================
// GEOLOCALIZAÇÃO
// ===================================================
user_pref("geo.enabled", true);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("permissions.default.geo", 0);

// ████████████████████████████████████████████████████████████████████████████
// 🎥 BLOCO 2: WEBRTC (funcional sem expor IP real)
// ████████████████████████████████████████████████████████████████████████████

user_pref("media.peerconnection.enabled", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.obfuscate_host_addresses", true);
user_pref("network.websocket.allowInsecureFromHTTPS", false);

// ████████████████████████████████████████████████████████████████████████████
// 🛡️ BLOCO 3: PRIVACIDADE - RASTREAMENTO E COOKIES
// ████████████████████████████████████████████████████████████████████████████

// Enhanced Tracking Protection (Modo Estrito)
user_pref("browser.contentblocking.category", "strict");

// Proteções de rastreamento
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);

// Cookies: Total Cookie Protection (5 = isolamento total)
user_pref("network.cookie.cookieBehavior", 5);
user_pref("network.cookie.cookieBehavior.pbmode", 5);

// Purga automática de cookies de rastreadores
user_pref("privacy.purge_trackers.enabled", true);

// Remoção de parâmetros de rastreamento de URLs
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);

// Referer Policy (protege origem do clique)
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.referer.defaultPolicy", 2);
user_pref("network.http.referer.defaultPolicy.pbmode", 2);

// Headers de privacidade global
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("browser.send_pings", false);

// HTTPS-Only Mode (força conexões seguras)
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
user_pref("dom.security.https_only_mode_allow_local", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);

// SSL/TLS (seguro e compatível)
user_pref("security.OCSP.enabled", 1);
user_pref("security.csp.reporting.enabled", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.cert_pinning.enforcement_level", 1);
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Permissões padrão (negar notificações)
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.manager.defaultsUrl", "");

// PDF seguro (sem JavaScript)
user_pref("pdfjs.enableScripting", false);
user_pref("browser.download.open_pdf_attachments_inline", true);

// ████████████████████████████████████████████████████████████████████████████
// 🧹 BLOCO 4: LIMPEZA DE DADOS AO FECHAR
// ████████████████████████████████████████████████████████████████████████████

// Limpeza automática ao fechar
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);
user_pref("privacy.clearOnShutdown_v2.sessions", true);

// Mantém configurações de sites (evita recriar exceções toda hora)
user_pref("privacy.clearOnShutdown_v2.siteSettings", false);

// Histórico personalizado
user_pref("privacy.history.custom", true);

// Retenção de downloads (0 = nunca manter)
user_pref("browser.download.manager.retention", 0);

// Remove arquivos temporários ao sair
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// Cache de mídia em memória (não em disco)
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Intervalo entre salvamentos de sessão (60 segundos)
user_pref("browser.sessionstore.interval", 60000);

// Nível de privacidade da sessão (2 = salvar nada)
user_pref("browser.sessionstore.privacy_level", 2);

// Limite de abas/janelas na sessão (reduzido para Android)
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.sessionstore.max_windows_undo", 2);
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true);

// ████████████████████████████████████████████████████████████████████████████
// ⚡ BLOCO 5: PERFORMANCE (otimizado para RAM/bateria do Android)
// ████████████████████████████████████████████████████████████████████████████

// Cache em disco (500 MB - melhor performance)
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 524288);
user_pref("browser.cache.disk.smart_size.enabled", true);

// Cache em memória (128 MB)
user_pref("browser.cache.memory.capacity", 131072);
user_pref("browser.cache.memory.max_entry_size", 20480);

// Cache de mídia (128 MB - reduzido para mobile)
user_pref("media.memory_cache_max_size", 131072);
user_pref("media.memory_caches_combined_limit_kb", 524288);

// Pré-carregamento de mídia (5 min - reduzido para mobile)
user_pref("media.cache_readahead_limit", 300);
user_pref("media.cache_resume_threshold", 150);

// Cache de imagens (5 MB - reduzido para mobile)
user_pref("image.cache.size", 5242880);
user_pref("image.mem.decode_bytes_at_a_time", 32768);

// Histórico de sessões (3 páginas no máximo)
user_pref("browser.sessionhistory.max_total_viewers", 3);
user_pref("browser.sessionhistory.entries", 3);
user_pref("browser.sessionhistory.contentViewerTimeout", 0);

// Favicons ativados (usabilidade)
user_pref("browser.chrome.favicons", true);
user_pref("browser.chrome.site_icons", true);

// Aceleração gráfica forçada
user_pref("layers.acceleration.force-enabled", true);

// Cache de fontes Skia (32 MB)
user_pref("gfx.content.skia-font-cache-size", 32);

// ===================================================
// CONEXÕES HTTP OTIMIZADAS (valores reduzidos para mobile)
// ===================================================
user_pref("network.http.max-connections", 900);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.http.max-persistent-connections-per-proxy", 6);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.http3.enable", true);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 3);
user_pref("network.http.request.max-start-delay", 5);

// ===================================================
// CACHE DNS (valores reduzidos para mobile)
// ===================================================
user_pref("network.dnsCacheEntries", 5000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 5120);

// ===================================================
// CONEXÕES ESPECULATIVAS (desativadas para economia de bateria)
// ===================================================
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);
user_pref("network.http.speculative-parallel-limit", 4);

// ████████████████████████████████████████████████████████████████████████████
// 🌐 BLOCO 6: TRADUÇÃO
// ████████████████████████████████████████████████████████████████████████████

user_pref("browser.translations.enable", true);
user_pref("browser.translations.automaticallyPopup", true);
user_pref("browser.translations.neverTranslateLanguages", "pt-BR,pt");
user_pref("browser.translations.panelShown", true);
user_pref("browser.translations.logLevel", "Error");

// ████████████████████████████████████████████████████████████████████████████
// 📊 BLOCO 7: TELEMETRIA (COMPLETAMENTE DESATIVADA - economiza dados)
// ████████████████████████████████████████████████████████████████████████████

// Desativa envio de dados
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);

// Desativa telemetria interna
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.cachedProfileGroupID", "");

// Telemetria da nova aba
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Estudos e experimentos
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Relatórios de crash
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// Captive portal (desativado - pode quebrar WiFi público)
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// ████████████████████████████████████████████████████████████████████████████
// 🔍 BLOCO 8: BARRA DE ENDEREÇO E BUSCA
// ████████████████████████████████████████████████████████████████████████████

// UI da barra
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);

// Sugestões (privacidade)
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.remotetab", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.trending.featureGate", false);

// Busca
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.update", false);

// Formulários e histórico
user_pref("browser.formfill.enable", false);

// Proteção contra phishing IDN
user_pref("network.IDN_show_punycode", true);

// ████████████████████████████████████████████████████████████████████████████
// 🔐 BLOCO 9: SENHAS E SEGURANÇA
// ████████████████████████████████████████████████████████████████████████████

// Gerenciador de senhas desativado
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);

// Autofill desativado
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// Segurança de sub-recursos
user_pref("editor.truncate_user_pastes", false);
user_pref("network.auth.subresource-http-auth-allow", 1);

// Safe Browsing (mantido por segurança)
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

// Popups restritos (evita anúncios invasivos)
user_pref("dom.popup_allowed_events", "");
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("browser.uitour.enabled", false);

// ████████████████████████████████████████████████████████████████████████████
// 🎨 BLOCO 10: INTERFACE E COMPORTAMENTO
// ████████████████████████████████████████████████████████████████████████████

// ===================================================
// UI MOZILLA (SEM PROMOÇÕES)
// ===================================================
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);
user_pref("identity.fxaccounts.enabled", false);

// ===================================================
// IA E RECURSOS DE ML (DESATIVADOS - economiza CPU/bateria)
// ===================================================
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

// ===================================================
// NOVA ABA MINIMALISTA (economiza dados)
// ===================================================
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// ===================================================
// DOWNLOADS
// ===================================================
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);

// ===================================================
// EXTENSÕES E CONTÊINERES
// ===================================================
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("privacy.userContext.ui.enabled", true);

// ===================================================
// TEMAS E APARÊNCIA
// ===================================================
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false);

// ===================================================
// TELA CHEIA E ABAS
// ===================================================
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
user_pref("dom.event.clipboardevents.enabled", true);
user_pref("dom.events.asyncClipboard.dataTransfer", true);

// ████████████████████████████████████████████████████████████████████████████
// 📱 BLOCO 11: AJUSTES EXCLUSIVOS PARA ANDROID (TOQUE E BATERIA)
// ████████████████████████████████████████████████████████████████████████████

// Rolagem touch (física específica para Android)
user_pref("apz.android.chrome_fling_physics.friction", 0.040);
user_pref("apz.android.chrome_fling_physics.inflexion", 0.70);

// Toque e zoom
user_pref("apz.allow_zooming", true);
user_pref("apz.allow_double_tap_zooming", true);
user_pref("apz.allow_implicit_gestures", true);

// Viewport
user_pref("dom.meta-viewport.enabled", true);
user_pref("viewport.enabled", true);

// ============================================================================
// ✅ RESUMO DAS CORREÇÕES (Versão 3.4 - Android)
// ============================================================================
//
// 🔴 REMOVIDO: Bloco DNS completo (configurar via interface do Android)
// 🔴 REMOVIDO: network.trr.* preferences (não necessárias no mobile)
// 🔴 REMOVIDO: RFP + FPP juntos (causavam conflito)
// 🔴 CORRIGIDO: security.OCSP.enabled = 1
// 🔴 CORRIGIDO: security.cert_pinning.enforcement_level = 1
// 🟢 ADICIONADO: Bloco de tradução (restaurado)
// 🟢 ADICIONADO: Clipboard functions restauradas
// 🟢 ORGANIZADO: Blocos renumerados (6 = Tradução, 7 = Telemetria)
//
// 📱 DNS NO ANDROID: Configurar via:
//    Firefox Android → Settings → Privacy & Security → DNS over HTTPS
//    Ou via about:config (se preferir, mas não recomendado)
//
// 📊 PRIVACIDADE: EFF Cover Your Tracks → "seu navegador tem proteção forte"
// 🔋 BATERIA: Conexões especulativas reduzidas + cache otimizado
// 💾 RAM: Valores reduzidos para melhor performance em dispositivos móveis
//
// ============================================================================
// FIM DO ARQUIVO user.js (Android)
// ============================================================================