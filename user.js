// ============================================================================
// user.js - Firefox Hardening & Optimization (BALANCEADO)
// Versão: 3.4 (2026-05-24) - PESQUISA RESTAURADA
// ============================================================================
//
// 🎯 OBJETIVO: Tornar o fingerprint "comum" em vez de "único"
// ✅ Mantém privacidade forte
// ✅ CORRIGIDO: Pesquisa em favoritos e histórico RESTAURADA
// ✅ Funcionalidades 100% (imagens, emojis, clipboard, tradução)
//
// ============================================================================

// ████████████████████████████████████████████████████████████████████████████
// 🛡️ BLOCO 1: PROTEÇÃO CONTRA FINGERPRINT (BALANCEADA)
// ████████████████████████████████████████████████████████████████████████████

user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.pbmode", true);
user_pref("privacy.fingerprintingProtection.overrides", "+FontVisibilityLevel2,-CanvasExtraction,-ScreenFingerprinting,-KeyboardFingerprinting,-AudioFingerprinting");
user_pref("privacy.fingerprintingProtection.granularOverrides", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("privacy.resistFingerprinting.randomization.canvas.use_siphash", true);
user_pref("privacy.reduceTimerPrecision", true);
user_pref("privacy.reduceTimerPrecision.unconditional", true);
user_pref("privacy.reduceTimerPrecision.microseconds", 1000);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("dom.battery.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("canvas.capturestream.enabled", false);

// ===================================================
// HTTP HEADERS (NORMALIZADOS)
// ===================================================
user_pref("network.http.accept.default", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8");
user_pref("network.http.accept-encoding", "gzip, deflate, br, zstd");
user_pref("network.http.accept-encoding.secure", "gzip, deflate, br, zstd");
user_pref("network.http.accept.quirk", false);

// ===================================================
// WEBGL (CORRIGIDO - PADRÃO FIREFOX)
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
// 🎥 BLOCO 2: WEBRTC (PROTEÇÃO CONTRA VAZAMENTO)
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

user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("network.cookie.cookieBehavior", 5);
user_pref("network.cookie.cookieBehavior.pbmode", 5);
user_pref("privacy.purge_trackers.enabled", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.referer.defaultPolicy", 2);
user_pref("network.http.referer.defaultPolicy.pbmode", 2);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("browser.send_pings", false);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
user_pref("dom.security.https_only_mode_allow_local", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.csp.reporting.enabled", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.cert_pinning.enforcement_level", 1);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("pdfjs.enableScripting", false);
user_pref("browser.download.open_pdf_attachments_inline", true);

// ████████████████████████████████████████████████████████████████████████████
// 🌐 BLOCO 4: TRADUÇÃO (RESTAURADA)
// ████████████████████████████████████████████████████████████████████████████

user_pref("browser.translations.enable", true);
user_pref("browser.translations.automaticallyPopup", true);
user_pref("browser.translations.neverTranslateLanguages", "pt-BR,pt");
user_pref("browser.translations.panelShown", true);
user_pref("browser.translations.logLevel", "Error");

// ████████████████████████████████████████████████████████████████████████████
// 🧹 BLOCO 5: LIMPEZA DE DADOS AO FECHAR
// ████████████████████████████████████████████████████████████████████████████

user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);
user_pref("privacy.clearOnShutdown_v2.sessions", true);
user_pref("privacy.clearOnShutdown_v2.siteSettings", false);
user_pref("privacy.history.custom", true);
user_pref("browser.download.manager.retention", 0);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.sessionstore.max_windows_undo", 3);

// ████████████████████████████████████████████████████████████████████████████
// ⚡ BLOCO 6: PERFORMANCE
// ████████████████████████████████████████████████████████████████████████████

user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 524288);
user_pref("browser.cache.disk.smart_size.enabled", true);
user_pref("browser.cache.memory.capacity", 131072);
user_pref("browser.cache.memory.max_entry_size", 20480);
user_pref("media.memory_cache_max_size", 262144);
user_pref("media.memory_caches_combined_limit_kb", 1048576);
user_pref("media.cache_readahead_limit", 600);
user_pref("media.cache_resume_threshold", 300);
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("browser.sessionhistory.max_total_viewers", 4);
user_pref("browser.sessionhistory.entries", 5);
user_pref("browser.chrome.favicons", true);
user_pref("browser.chrome.site_icons", true);
user_pref("layers.acceleration.force-enabled", false);
user_pref("gfx.content.skia-font-cache-size", 32);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-persistent-connections-per-proxy", 10);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.http3.enable", true);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.request.max-start-delay", 5);
user_pref("network.dnsCacheEntries", 10000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);
user_pref("network.http.speculative-parallel-limit", 6);

// ████████████████████████████████████████████████████████████████████████████
// 📡 BLOCO 7: DNS OVER HTTPS (CONFIGURAÇÃO COMENTADA)
// ████████████████████████████████████████████████████████████████████████████
//
// ⚠️ INSTRUÇÃO PARA O USUÁRIO:
// Remova os comentários (//) das linhas abaixo e escolha seu provedor preferido.
//
// Provedores recomendados (privacidade):
// - Quad9:    https://dns.quad9.net/dns-query
// - Cloudflare: https://cloudflare-dns.com/dns-query
// - Mullvad:  https://dns.mullvad.net/dns-query
//
// 🔧 CONFIGURAÇÃO (descomente APENAS UMA opção)
user_pref("network.trr.mode", 2);                    // 2 = aumentar proteção (fallback)

// Opção 1: Cloudflare (rápido)
// user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
// user_pref("network.trr.custom_uri", "https://cloudflare-dns.com/dns-query");

// Opção 2: Quad9 (privacidade)
// user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
// user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");

// Opção 3: Mullvad (sem logs)
// user_pref("network.trr.uri", "https://dns.mullvad.net/dns-query");
// user_pref("network.trr.custom_uri", "https://dns.mullvad.net/dns-query");

user_pref("network.trr.excluded-domains", "");
user_pref("network.trr.early-AAAA", false);

// ████████████████████████████████████████████████████████████████████████████
// 📊 BLOCO 8: TELEMETRIA (DESATIVADA)
// ████████████████████████████████████████████████████████████████████████████

user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
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
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// ████████████████████████████████████████████████████████████████████████████
// 🔍 BLOCO 9: BARRA DE ENDEREÇO E BUSCA (PESQUISA RESTAURADA)
// ████████████████████████████████████████████████████████████████████████████

user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
// 🔴 CORRIGIDO: Pesquisa em favoritos e histórico RESTAURADA
user_pref("browser.urlbar.suggest.history", true);      // ✅ ATIVADO
user_pref("browser.urlbar.suggest.bookmark", true);     // ✅ ATIVADO
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.remotetab", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.update", false);
user_pref("browser.formfill.enable", true);              // ✅ ATIVADO para formulários
user_pref("network.IDN_show_punycode", true);

// ████████████████████████████████████████████████████████████████████████████
// 🔐 BLOCO 10: SENHAS E SEGURANÇA
// ████████████████████████████████████████████████████████████████████████████

user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("editor.truncate_user_pastes", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("dom.popup_allowed_events", "");
user_pref("security.fileuri.strict_origin_policy", false);
user_pref("browser.uitour.enabled", false);

// ████████████████████████████████████████████████████████████████████████████
// 🎨 BLOCO 11: INTERFACE E COMPORTAMENTO
// ████████████████████████████████████████████████████████████████████████████

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
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false);
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

// ============================================================================
// ✅ CORREÇÕES APLICADAS (Versão 3.4)
// ============================================================================
//
// 🟢 CORRIGIDO: Pesquisa em favoritos e histórico RESTAURADA
// 🟢 CORRIGIDO: browser.formfill.enable ATIVADO
// 🟢 ALINHADO: DNS comentado - usuário escolhe o provedor
// 🟢 CORRIGIDO: Bloco 7 com instruções claras
//
// ============================================================================
// FIM DO ARQUIVO user.js
// ============================================================================