/* Fides API Documentation — Deutsche Übersetzungen */
window.__fides_i18n = window.__fides_i18n || {};
window.__fides_i18n['de'] = {

  // Navigation
  nav_home: 'Startseite',
  nav_api_reference: 'API-Referenz',
  nav_getting_started: 'Erste Schritte',
  nav_architecture: 'Architektur',
  nav_cta_api_reference: 'API-Referenz',

  // Sidebar
  api_sidebar_title: 'API-Referenz',
  api_sidebar_base_url: 'Basis-URL:',
  api_sidebar_overview: 'Übersicht',
  api_sidebar_authentication: 'Authentifizierung',
  api_sidebar_errors: 'Fehler',
  api_sidebar_public: 'Öffentliche Endpunkte',
  api_sidebar_auth: 'Authentifizierung',
  api_sidebar_documents: 'Dokumente',
  api_sidebar_invoices: 'Rechnungen',
  api_sidebar_submissions: 'Übermittlungen',
  api_sidebar_companies: 'Unternehmen',
  api_sidebar_branches: 'Filialen',
  api_sidebar_pos: 'Verkaufsstellen',
  api_sidebar_certificates: 'Zertifikate',
  api_sidebar_credentials: 'Anmeldedaten',
  api_sidebar_api_keys: 'API-Schlüssel',
  api_sidebar_validation: 'Validierung',
  api_sidebar_reports: 'Berichte',
  api_sidebar_webhooks: 'Webhooks',
  api_menu_button: 'Menü',

  // Common
  api_copy_button: 'Kopieren',
  api_required_badge: 'Erforderlich',
  api_optional_badge: 'Optional',
  api_auth_badge: 'Auth',
  api_th_parameter: 'Parameter',
  api_th_type: 'Typ',
  api_th_required: 'Erforderlich',
  api_th_description: 'Beschreibung',
  api_th_field: 'Feld',
  api_th_code: 'Code',
  api_th_name: 'Name',
  api_th_status: 'Status',
  api_th_method: 'Methode',
  api_th_path: 'Pfad',
  api_th_default: 'Standard',

  // Overview section
  api_section_overview: 'Übersicht',
  api_section_overview_desc: 'Fides ist eine zustandslose API für elektronische Rechnungsstellung in Costa Rica, die mit Hacienda arbeitet. Alle Endpunkte beginnen mit <code>/api/v1</code>.',
  api_section_response_format: 'Antwortformat',
  api_section_response_format_desc: 'Alle Antworten folgen einem standardisierten JSON-Umschlag:',
  api_section_pagination: 'Paginierung',
  api_section_pagination_desc: 'Listen-Endpunkte liefern paginierte Ergebnisse mit den Feldern <code>total</code>, <code>page</code> und <code>page_size</code>.',

  // Authentication section
  api_section_authentication: 'Authentifizierung',
  api_section_authentication_desc: 'Fides unterstützt zwei Authentifizierungsmethoden:',
  api_auth_method_api_key: 'API Key',
  api_auth_method_api_key_desc: 'Den API-Schlüssel im <code>Authorization</code>-Header als Bearer-Token übergeben.',
  api_auth_method_jwt: 'JWT Token',
  api_auth_method_jwt_desc: 'Ein JWT über den <code>/auth/token</code>-Endpunkt abrufen und im <code>Authorization</code>-Header übergeben.',

  // Errors section
  api_section_errors: 'Fehler',
  api_section_errors_desc: 'Alle Fehler geben eine strukturierte JSON-Antwort zurück:',
  api_error_code: 'Fehlercode',
  api_error_message: 'Menschenlesbare Nachricht',
  api_error_timestamp: 'UTC-Zeitstempel',
  api_error_correlation_id: 'Korrelations-ID der Anfrage',
  api_error_details: 'Optionale Validierungsdetails',

  // Health endpoints
  api_section_health: 'Systemstatus',
  api_section_health_desc: 'Server-Systemstatus und Gesundheitsendpunkte.',
  api_get_health_title: 'Gesundheitsprüfung',
  api_get_health_desc: 'Gibt Server-Status und Version zurück. Keine Authentifizierung erforderlich.',
  api_get_health_response_200: 'Antwort — OK (200)',
  api_get_health_response_body: 'Antwortkörper',
  api_get_health_field_status: 'Serverstatus ("ok" oder "degraded")',
  api_get_health_field_version: 'Semantische Versionszeichenkette',

  // Auth endpoints
  api_section_auth: 'Authentifizierung',
  api_section_auth_desc: 'Benutzerregistrierung, Anmeldung und Token-Verwaltung.',
  api_register_title: 'Neuen Benutzer registrieren',
  api_register_desc: 'Ein neues Benutzerkonto mit E-Mail, Passwort, Name und Mandant erstellen.',
  api_register_request: 'Anfragekörper',
  api_register_response_201: 'Antwort — Erstellt (201)',
  api_register_field_email: 'E-Mail-Adresse des Benutzers',
  api_register_field_password: 'Benutzerpasswort (mindestens 8 Zeichen)',
  api_register_field_name: 'Vollständiger Name',
  api_register_field_tenant_id: 'UUID des zugehörigen Mandanten',

  api_token_title: 'Zugriffstoken abrufen',
  api_token_desc: 'Authentifizieren und ein JWT-Zugriffstoken erhalten. Unterstützt die Grant-Typen <code>password</code> und <code>refresh_token</code>.',
  api_token_request: 'Anfragekörper',
  api_token_response_200: 'Antwort — OK (200)',
  api_token_field_grant_type: 'Grant-Typ: "password" oder "refresh_token"',
  api_token_field_email: 'Benutzer-E-Mail (erforderlich bei password grant)',
  api_token_field_password: 'Benutzerpasswort (erforderlich bei password grant)',
  api_token_field_refresh_token: 'Refresh Token (erforderlich bei refresh_token grant)',
  api_token_resp_access_token: 'JWT-Zugriffstoken',
  api_token_resp_refresh_token: 'Refresh Token zum Abrufen neuer Zugriffstoken',
  api_token_resp_token_type: 'Immer "Bearer"',
  api_token_resp_expires_in: 'Token-Lebensdauer in Sekunden',

  api_change_password_title: 'Passwort ändern',
  api_change_password_desc: 'Das Passwort des authentifizierten Benutzers ändern.',
  api_change_password_request: 'Anfragekörper',
  api_change_password_response_200: 'Antwort — OK (200)',
  api_change_password_field_current: 'Aktuelles Passwort',
  api_change_password_field_new: 'Neues Passwort (mindestens 8 Zeichen)',

  api_revoke_title: 'Token widerrufen',
  api_revoke_desc: 'Ein JWT-Zugriffstoken oder Refresh Token widerrufen, indem es zur Token-Sperrliste hinzugefügt wird.',
  api_revoke_request: 'Anfragekörper',
  api_revoke_response_200: 'Antwort — OK (200)',
  api_revoke_field_token: 'Der zu widerrufende Token',

  // Documents endpoints
  api_section_documents: 'Dokumente',
  api_section_documents_desc: 'Elektronische Dokumente erstellen, signieren, stornieren und verwalten. Alle Endpunkte erfordern eine Authentifizierung.',
  api_create_document_title: 'Neues elektronisches Dokument erstellen',
  api_create_document_desc: 'Ein neues elektronisches Dokument (Factura Electrónica, Nota de Crédito, Nota de Débito oder Recibo) aus strukturierten Positionsdaten generieren. Der Server erstellt das XML, validiert es und gibt ein zeichenfertiges Dokument zurück.',
  api_create_document_request: 'Anfragekörper',
  api_create_document_response_201: 'Antwort — Erstellt (201)',
  api_create_document_doc_types: 'Dokumenttypen (doc_type)',
  api_create_document_id_types: 'Empfängerausweisarten (receiver_id_type)',

  api_get_document_title: 'Dokumentstatus abrufen',
  api_get_document_desc: 'Den aktuellen Status und die Metadaten eines elektronischen Dokuments anhand seiner eindeutigen ID abrufen.',
  api_get_document_response_200: 'Antwort — OK (200)',
  api_get_document_workflow: 'Dokument-Workflow-Status',

  api_sign_document_title: 'Dokument digital signieren (XAdES)',
  api_sign_document_desc: 'Ein generiertes Dokument mit XAdES digital signieren. Nur Dokumente mit dem Status "Generiert" können signiert werden.',
  api_sign_document_request: 'Anfragekörper',
  api_sign_document_response_200: 'Antwort — OK (200)',
  api_sign_document_response_error: 'Antwort — Dokument nicht signierbar (409)',

  api_cancel_document_title: 'Dokument stornieren',
  api_cancel_document_desc: 'Ein Dokument stornieren, das noch nicht von Hacienda akzeptiert wurde.',
  api_cancel_document_request: 'Anfragekörper',
  api_cancel_document_response_200: 'Antwort — OK (200)',
  api_cancel_document_cancellable: 'Stornierbare Status',

  api_finalize_document_title: 'Dokument finalisieren',
  api_finalize_document_desc: 'Ein Dokumententwurf finalisieren, indem der vollständige Dokumenteninhalt übergeben wird. Generiert XML und validiert gegen das Schema.',
  api_finalize_document_request: 'Anfragekörper',
  api_finalize_document_response_200: 'Antwort — OK (200)',

  api_draft_document_title: 'Dokumententwurf erstellen',
  api_draft_document_desc: 'Einen Dokumententwurf ohne XML-Generierung erstellen. Daten für spätere Überprüfung speichern.',
  api_draft_document_request: 'Anfragekörper',
  api_draft_document_response_201: 'Antwort — Erstellt (201)',

  api_pending_contingency_title: 'Ausstehende Notdokumente auflisten',
  api_pending_contingency_desc: 'Alle ausstehenden Notdokumente des Mandanten auflisten.',
  api_pending_contingency_response_200: 'Antwort — OK (200)',
  api_pending_contingency_situation_codes: 'Notfall-Situationcodes',

  // Invoices endpoints
  api_section_invoices: 'Rechnungen',
  api_section_invoices_desc: 'Elektronische Rechnungen verwalten.',
  api_list_invoices_title: 'Rechnungen auflisten (paginiert)',
  api_list_invoices_desc: 'Alle Rechnungen des authentifizierten Mandanten mit Paginierung auflisten.',
  api_list_invoices_params: 'Abfrageparameter',
  api_list_invoices_response_200: 'Antwort — OK (200)',

  api_create_invoice_title: 'Neue Rechnung erstellen',
  api_create_invoice_desc: 'Eine neue elektronische Rechnung für den authentifizierten Mandanten erstellen.',
  api_create_invoice_request: 'Anfragekörper',
  api_create_invoice_response_201: 'Antwort — Erstellt (201)',
  api_create_invoice_fields: 'Feldreferenz',

  api_get_invoice_title: 'Rechnung nach ID abrufen',
  api_get_invoice_desc: 'Eine einzelne Rechnung anhand ihrer eindeutigen Dokument-ID abrufen.',
  api_get_invoice_response_200: 'Antwort — OK (200)',
  api_get_invoice_response_fields: 'Antwortfelder',

  // Submissions endpoints
  api_section_submissions: 'Übermittlungen',
  api_section_submissions_desc: 'Signierte Dokumente an Hacienda übermitteln und ihren Status verfolgen.',
  api_submit_document_title: 'Dokument an Hacienda übermitteln',
  api_submit_document_desc: 'Ein signiertes Dokument zur Validierung und Verarbeitung an das MREC API von Hacienda übermitteln.',
  api_submit_document_request: 'Anfragekörper',
  api_submit_document_response_202: 'Antwort — Akzeptiert (202)',

  api_get_submission_title: 'Übermittlungsstatus abrufen',
  api_get_submission_desc: 'Den aktuellen Status einer Dokumentenübermittlung an Hacienda prüfen.',
  api_get_submission_response_200: 'Antwort — OK (200)',
  api_get_submission_statuses: 'Übermittlungsstatus',

  api_retry_submission_title: 'Fehlgeschlagene Übermittlung erneut versuchen',
  api_retry_submission_desc: 'Eine Übermittlung erneut versuchen, die aufgrund eines vorübergehenden Fehlers fehlgeschlagen ist.',
  api_retry_submission_response_202: 'Antwort — Akzeptiert (202)',

  // Companies endpoints
  api_section_companies: 'Unternehmen',
  api_section_companies_desc: 'Unternehmensprofile des aktuellen Mandanten verwalten.',
  api_list_companies_title: 'Unternehmensprofil abrufen',
  api_list_companies_desc: 'Das Unternehmensprofil des Mandanten des authentifizierten Benutzers abrufen.',
  api_list_companies_response_200: 'Antwort — Erfolg (200)',

  api_create_company_title: 'Unternehmensprofil erstellen',
  api_create_company_desc: 'Ein neues Unternehmensprofil für einen Mandanten erstellen. Jeder Mandant darf nur ein Unternehmensprofil haben.',
  api_create_company_request: 'Anfragekörper',
  api_create_company_response_201: 'Antwort — Erstellt (201)',
  api_create_company_response_409: 'Antwort — Konflikt (409)',

  api_get_company_title: 'Unternehmen nach ID abrufen',
  api_get_company_desc: 'Ein einzelnes Unternehmensprofil anhand seiner eindeutigen ID abrufen.',
  api_get_company_response_200: 'Antwort — Erfolg (200)',

  api_update_company_title: 'Unternehmensprofil aktualisieren',
  api_update_company_desc: 'Ein Unternehmensprofil teilweise aktualisieren. Nur die Felder übergeben, die geändert werden sollen.',
  api_update_company_request: 'Anfragekörper',
  api_update_company_fields: 'Aktualisierungsfelder',
  api_update_company_response_200: 'Antwort — Erfolg (200)',

  // Branches endpoints
  api_section_branches: 'Filialen',
  api_section_branches_desc: 'Filialen eines Unternehmens für den Mehrstandort-Betrieb verwalten.',
  api_list_branches_title: 'Filialen auflisten',
  api_list_branches_desc: 'Alle Filialen eines Unternehmens auflisten.',
  api_list_branches_response_200: 'Antwort — Erfolg (200)',

  api_create_branch_title: 'Filiale erstellen',
  api_create_branch_desc: 'Eine neue Filiale unter dem angegebenen Unternehmen erstellen.',
  api_create_branch_request: 'Anfragekörper',
  api_create_branch_fields: 'Anfragefelder',
  api_create_branch_response_201: 'Antwort — Erstellt (201)',
  api_create_branch_response_409: 'Antwort — Konflikt (409)',

  api_get_branch_title: 'Filiale nach ID abrufen',
  api_get_branch_desc: 'Eine einzelne Filiale anhand ihrer eindeutigen ID abrufen.',
  api_get_branch_response_200: 'Antwort — Erfolg (200)',

  api_get_branch_by_code_title: 'Filiale nach Code abrufen',
  api_get_branch_by_code_desc: 'Eine Filiale anhand von Unternehmens-ID und Filialcode abrufen.',
  api_get_branch_by_code_response_200: 'Antwort — Erfolg (200)',

  api_update_branch_title: 'Filiale aktualisieren',
  api_update_branch_desc: 'Eine Filiale teilweise aktualisieren.',
  api_update_branch_request: 'Anfragekörper',
  api_update_branch_fields: 'Aktualisierungsfelder',
  api_update_branch_response_200: 'Antwort — Erfolg (200)',

  // Points of Sale endpoints
  api_section_pos: 'Verkaufsstellen',
  api_section_pos_desc: 'Verkaufsstellen (terminales) unter Filialen verwalten.',
  api_list_pos_title: 'Verkaufsstellen auflisten',
  api_list_pos_desc: 'Alle Verkaufsstellen einer Filiale auflisten.',
  api_list_pos_response_200: 'Antwort — Erfolg (200)',

  api_create_pos_title: 'Verkaufsstelle erstellen',
  api_create_pos_desc: 'Eine neue Verkaufsstelle unter der angegebenen Filiale erstellen.',
  api_create_pos_request: 'Anfragekörper',
  api_create_pos_fields: 'Anfragefelder',
  api_create_pos_response_201: 'Antwort — Erstellt (201)',
  api_create_pos_response_409: 'Antwort — Konflikt (409)',

  api_get_pos_title: 'Verkaufsstelle nach ID abrufen',
  api_get_pos_desc: 'Eine einzelne Verkaufsstelle anhand ihrer eindeutigen ID abrufen.',
  api_get_pos_response_200: 'Antwort — Erfolg (200)',

  api_get_pos_by_code_title: 'Verkaufsstelle nach Code abrufen',
  api_get_pos_by_code_desc: 'Eine Verkaufsstelle anhand von Filial-ID und POS-Code abrufen.',
  api_get_pos_by_code_response_200: 'Antwort — Erfolg (200)',

  api_update_pos_title: 'Verkaufsstelle aktualisieren',
  api_update_pos_desc: 'Eine Verkaufsstelle teilweise aktualisieren.',
  api_update_pos_request: 'Anfragekörper',
  api_update_pos_fields: 'Aktualisierungsfelder',
  api_update_pos_response_200: 'Antwort — Erfolg (200)',

  // Certificates endpoints
  api_section_certificates: 'Zertifikate',
  api_section_certificates_desc: 'Digitale Zertifikate für die XAdES-XML-Signatur verwalten.',
  api_list_certificates_title: 'Zertifikate auflisten',
  api_list_certificates_desc: 'Alle digitalen Zertifikate des Mandanten auflisten.',
  api_list_certificates_response_200: 'Antwort — OK (200)',

  api_create_certificate_title: 'Zertifikat hochladen',
  api_create_certificate_desc: 'Ein neues P12/PFX-Digitalzertifikat zur XML-Signierung speichern.',
  api_create_certificate_request: 'Anfragekörper (multipart/form-data)',
  api_create_certificate_response_201: 'Antwort — Erstellt (201)',

  api_get_certificate_title: 'Zertifikat nach ID abrufen',
  api_get_certificate_desc: 'Zertifikatdetails anhand der ID abrufen.',
  api_get_certificate_response_200: 'Antwort — OK (200)',

  api_delete_certificate_title: 'Zertifikat deaktivieren',
  api_delete_certificate_desc: 'Ein digitales Zertifikat deaktivieren. Das Zertifikat wird nicht gelöscht, sondern als inaktiv markiert.',
  api_delete_certificate_response_200: 'Antwort — OK (200)',

  // Credentials endpoints
  api_section_credentials: 'Anmeldedaten',
  api_section_credentials_desc: 'Hacienda-API-Anmeldedaten für die Dokumentenübermittlung verwalten.',
  api_get_credentials_title: 'Anmeldedaten-Status prüfen',
  api_get_credentials_desc: 'Prüfen, ob Hacienda-Anmeldedaten für den authentifizierten Benutzer konfiguriert sind.',
  api_get_credentials_response_200: 'Antwort — OK (200)',

  api_set_credentials_title: 'Hacienda-Anmeldedaten festlegen',
  api_set_credentials_desc: 'Hacienda-Anmeldedaten festlegen (validiert gegen die IDP von Hacienda).',
  api_set_credentials_request: 'Anfragekörper',
  api_set_credentials_response_201: 'Antwort — Erstellt (201)',

  api_update_credentials_title: 'Hacienda-Anmeldedaten aktualisieren',
  api_update_credentials_desc: 'Vorhandene Hacienda-Anmeldedaten aktualisieren.',
  api_update_credentials_request: 'Anfragekörper',
  api_update_credentials_response_200: 'Antwort — OK (200)',

  // API Keys endpoints
  api_section_api_keys: 'API-Schlüssel',
  api_section_api_keys_desc: 'API-Schlüssel für den programmgesteuerten Zugriff verwalten.',
  api_create_api_key_title: 'API-Schlüssel erstellen',
  api_create_api_key_desc: 'Einen neuen API-Schlüssel für den programmgesteuerten Zugriff erstellen.',
  api_create_api_key_request: 'Anfragekörper',
  api_create_api_key_response_201: 'Antwort — Erstellt (201)',

  api_list_api_keys_title: 'API-Schlüssel auflisten',
  api_list_api_keys_desc: 'Alle aktiven API-Schlüssel des Mandanten auflisten.',
  api_list_api_keys_response_200: 'Antwort — OK (200)',

  api_delete_api_key_title: 'API-Schlüssel widerrufen',
  api_delete_api_key_desc: 'Einen API-Schlüssel widerrufen. Der Schlüssel kann nicht wiederhergestellt werden.',
  api_delete_api_key_response_200: 'Antwort — OK (200)',

  // Validation endpoints
  api_section_validation: 'Validierung',
  api_section_validation_desc: 'XML-Dokumente gegen das Schema validieren.',
  api_validate_xml_title: 'XML-Dokument validieren',
  api_validate_xml_desc: 'Ein Factura Electrónica XML-Dokument gegen das Schema validieren. Keine Authentifizierung erforderlich.',
  api_validate_xml_request: 'Anfragekörper',
  api_validate_xml_response_200: 'Antwort — OK (200)',
  api_validate_xml_response_422: 'Antwort — Validierung fehlgeschlagen (422)',

  // Webhooks endpoints
  api_section_webhooks: 'Webhooks',
  api_section_webhooks_desc: 'Asynchrone Dokumentstatusaktualisierungen von Hacienda empfangen.',
  api_webhook_status_update_title: 'Statusaktualisierung empfangen',
  api_webhook_status_update_desc: 'Asynchrone Dokumentstatusaktualisierungen von Hacienda (oder einem lokalen Relay) empfangen.',
  api_webhook_status_update_request: 'Anfragekörper',
  api_webhook_status_update_response_200: 'Antwort — OK (200)',

  // Documentation endpoints
  api_section_docs: 'Dokumentation',
  api_section_docs_desc: 'API-Dokumentation und OpenAPI-Spezifikation.',
  api_swagger_ui_title: 'Swagger UI',
  api_swagger_ui_desc: 'Interaktive API-Dokumentation über Swagger UI.',
  api_openapi_spec_title: 'OpenAPI-Spezifikation',
  api_openapi_spec_desc: 'OpenAPI 3.1-Spezifikation im JSON-Format.',

  // ==================== New keys (from HTML audit) ====================

  // Auth endpoints (detailed)
  api_auth_title: 'Authentifizierung',
  api_auth_description: 'Geschützte Endpunkte zur Verwaltung der Benutzerauthentifizierung, einschließlich Passwortänderung und Token-Widerruf.',
  api_auth_request_body: 'Anfragekörper',
  api_auth_response_200: 'Antwort — 200 OK',
  api_auth_table_field: 'Feld',
  api_auth_table_type: 'Typ',
  api_auth_table_required: 'Erforderlich',
  api_auth_table_description: 'Beschreibung',
  api_auth_yes: 'Ja',
  api_auth_change_password_title: 'Passwort ändern',
  api_auth_change_password_description: 'Ändert das Passwort des authentifizierten Benutzers. Erfordert die Verifizierung des aktuellen Passworts.',
  api_auth_change_password_field_current: 'Aktuelles Passwort zur Verifizierung',
  api_auth_change_password_field_new: 'Neues Passwort (mindestens 8 Zeichen)',
  api_auth_revoke_token_title: 'Token widerrufen',
  api_auth_revoke_token_description: 'Ein JWT-Zugriffs- oder Refresh-Token widerrufen und zur Sperrliste hinzufügen. Der Token ist für die Authentifizierung nicht mehr gültig.',
  api_auth_revoke_token_field_token: 'Der JWT-Token zum Widerrufen',
  api_auth_revoke_token_note: 'Ein widerrufener Token kann nicht wiederhergestellt werden. Der Client muss einen neuen Token über /auth/token abrufen.',

  // Branches
  api_branches_title: 'Filialen',
  api_branches_desc: 'Filialen des Unternehmens für den Multi-Standort-Betrieb verwalten.',

  // Companies
  api_companies_title: 'Unternehmen',
  api_companies_desc: 'Unternehmensprofile des aktuellen Mandanten verwalten.',

  // Drafts
  api_create_draft_title: 'Dokumententwurf erstellen',
  api_create_draft_desc: 'Einen Dokumententwurf ohne XML-Generierung erstellen. Daten für spätere Überprüfung und Finalisierung speichern.',

  // Create invoice fields
  api_create_invoice_field_key: '50-stelliger numerischer Schlüssel, der das Dokument bei Hacienda identifiziert.',
  api_create_invoice_field_date: 'Datum und Uhrzeit der Dokumentenausstellung mit Zeitzonen-Offset.',
  api_create_invoice_field_doc_type: 'Dokumenttyp. Verwenden Sie',
  api_create_invoice_field_activity_code: 'Wirtschaftsaktivitätscode gemäß dem CNAE-Katalog von Hacienda.',
  api_create_invoice_field_sequential: 'Fortlaufende Nummer mit 10 Ziffern. Muss pro Dokumenttyp und Filiale eindeutig sein.',
  api_create_invoice_field_seller_name: 'Name oder Firmenname des Ausstellers.',
  api_create_invoice_field_seller_id_type: 'Identifikationstyp des Ausstellers:',
  api_create_invoice_field_seller_id_number: 'Identifikationsnummer des Ausstellers (juridische, physische Person usw.).',
  api_create_invoice_field_receiver_name: 'Name oder Firmenname des Empfängers.',
  api_create_invoice_field_receiver_id_type: 'Identifikationstyp des Empfängers. Gleiche Werte wie',
  api_create_invoice_field_receiver_id_number: 'Identifikationsnummer des Empfängers.',
  api_create_invoice_field_receiver_email: 'E-Mail-Adresse des Empfängers. Hacienda sendet die Rechnung an diese Adresse.',
  api_create_invoice_field_details: 'Liste der Detailzeilen. Jedes Element enthält:',

  // Common field descriptions
  api_field_activity_code: 'Wirtschaftsaktivitätscode gemäß CABYS (Klassifikation der Wirtschaftsaktivitäten nach Sektionen).',
  api_field_address: 'Objekt mit der physischen Adresse der Filiale.',
  api_field_address_replace: 'Vollständiges Adressobjekt, das den aktuellen Wert ersetzt.',
  api_field_street: 'Genauere Adresse.',
  api_field_details: 'Zusätzliche Adressinformationen.',
  api_field_neighborhood: 'Viertel oder Wohngebiet.',
  api_field_canton: 'Kanton.',
  api_field_district: 'Bezirk.',
  api_field_province: 'Provinz.',
  api_field_postal_code: 'Postleitzahl.',
  api_field_phone: 'Telefonnummer der Filiale.',
  api_field_email: 'Kontakt-E-Mail-Adresse.',
  api_field_id_type: 'Identifikationstyp:',
  api_field_id_number: 'Steuerliche Identifikationsnummer.',
  api_field_legal_name: 'Vollständiger Firmenname (registrierter rechtlicher Name).',
  api_field_trade_name: 'Handelsname des Unternehmens.',
  api_field_branch_code: 'Eindeutiger Code der Filiale innerhalb des Unternehmens (z.B.',
  api_field_branch_name: 'Beschreibender Name der Filiale.',
  api_field_pos_name: 'Beschreibender Name der Verkaufsstelle.',
  api_field_pos_code: 'Eindeutiger Terminal-Code innerhalb der Filiale (z.B.',
  api_field_pos_active: 'Status der Verkaufsstelle. Standard ist',

  // Generate document
  api_generate_document_title: 'Neues elektronisches Dokument generieren',
  api_generate_document_desc: 'Ein neues elektronisches Dokument aus strukturierten Daten generieren. Erstellt die XML-Nutzlast, signiert und übermittelt sie jedoch nicht.',

  // Get company by tenant
  api_get_company_by_tenant_title: 'Unternehmensprofil des Mandanten abrufen',
  api_get_company_by_tenant_desc: 'Ruft das Unternehmensprofil des authentifizierten Mandanten ab. Jeder Mandant hat maximal ein registriertes Unternehmensprofil.',

  // Get invoice params
  api_get_invoice_param_id: 'Eindeutiger Bezeichner der Rechnung.',

  // Get submission status
  api_get_submission_status_title: 'Übermittlungsstatus abrufen',
  api_get_submission_status_desc: 'Ruft den aktuellen Status einer Übermittlung an Hacienda ab, einschließlich des erhaltenen Schlüssels und der Antwort des Dienstes.',
  api_get_submission_status_param_id: 'Eindeutiger Bezeichner der Übermittlung.',

  // Invoices
  api_invoices_title: 'Rechnungen',
  api_invoices_description: 'Elektronische Rechnungen verwalten.',

  // API Keys
  api_keys_title: 'API-Schlüssel',
  api_keys_description: 'API-Schlüssel für den programmgesteuerten Zugriff verwalten.',
  api_keys_create_title: 'API-Schlüssel erstellen',
  api_keys_create_description: 'Generiert einen neuen API-Schlüssel für den programmgesteuerten Zugriff. Der vollständige Schlüssel wird nur in der Erstellungsantwort angezeigt und kann danach nicht mehr abgerufen werden. Speichern Sie ihn sicher.',
  api_keys_create_name_desc: 'Beschreibender Name zur Identifizierung des Schlüssels',
  api_keys_list_title: 'API-Schlüssel auflisten',
  api_keys_list_description: 'Gibt eine Liste aller aktiven API-Schlüssel des Mandanten zurück. Aus Sicherheitsgründen wird der vollständige Schlüssel nicht zurückgegeben, nur sein Präfix.',
  api_keys_list_no_body: 'Dieser Endpunkt erfordert keinen Anfragekörper.',
  api_keys_revoke_title: 'API-Schlüssel widerrufen',
  api_keys_revoke_description: 'Widerruft einen API-Schlüssel dauerhaft. Diese Aktion ist unwiderruflich. Der Schlüssel funktioniert sofort in allen Anfragen nicht mehr.',
  api_keys_revoke_id_desc: 'Eindeutiger Bezeichner des API-Schlüssels zum Widerrufen',
  api_keys_create_warning: '<strong>Wichtig:</strong> Der vollständige Schlüssel wird nur in dieser Antwort zurückgegeben. Er kann nicht wiederhergestellt werden. Wenn Sie den Schlüssel verlieren, müssen Sie einen neuen erstellen.',
  api_keys_revoke_warning: '<strong>Warnung:</strong> Die Widerrufung ist unwiderruflich. Alle Anwendungen, die diesen Schlüssel verwenden, stellen sofort ihre Arbeit ein.',

  // List documents
  api_list_documents_title: 'Dokumente auflisten',
  api_list_documents_desc: 'Alle elektronischen Dokumente des authentifizierten Mandanten mit Paginierung auflisten.',

  // List invoices params
  api_list_invoices_param_page: 'Seitennummer. Standard:',
  api_list_invoices_param_page_size: 'Anzahl der Elemente pro Seite. Maximum:',
  api_list_invoices_param_status: 'Nach Rechnungsstatus filtern. Gültige Werte:',

  // List submissions
  api_list_submissions_title: 'Übermittlungen auflisten',
  api_list_submissions_desc: 'Gibt eine paginierte Liste aller Dokumentenübermittlungen an Hacienda zurück.',
  api_list_submissions_param_page: 'Seitennummer. Standard:',
  api_list_submissions_param_page_size: 'Anzahl der Elemente pro Seite. Maximum:',
  api_list_submissions_param_status: 'Nach Übermittlungsstatus filtern. Gültige Werte:',

  // Common labels
  api_no: 'Nein',
  api_no_path_params: 'Nicht zutreffend. Der Mandant wird aus dem Authentifizierungstoken abgeleitet.',
  api_optional: 'Nein',
  api_yes: 'Ja',
  api_required: 'Ja',
  api_response: 'Antwort',
  api_response_body: 'Antwortkörper',
  api_request_body: 'Anfragekörper',
  api_request_example: 'Anfragebeispiel',
  api_query_params: 'Abfrageparameter',
  api_path_parameters: 'Pfadparameter',
  api_path_params: 'Pfadparameter',
  api_partial_update_note: 'Alle Felder sind optional. Übergeben Sie nur die Felder, die geändert werden sollen.',

  // Path parameters
  api_param_branch_id: 'Eindeutiger Bezeichner der Filiale.',
  api_param_branch_code: 'Filialcode (eindeutig innerhalb des Unternehmens).',
  api_param_company_id: 'Eindeutiger Bezeichner des Unternehmens.',
  api_param_pos_id: 'Eindeutiger Bezeichner der Verkaufsstelle.',
  api_param_pos_code: 'Terminal-Code der Verkaufsstelle (eindeutig innerhalb der Filiale).',

  // POS
  api_pos_title: 'Verkaufsstellen',
  api_pos_desc: 'Verkaufsstellen (Terminale) unter Filialen verwalten.',

  // Public endpoints
  api_public_title: 'Öffentliche Endpunkte',
  api_public_desc: 'Diese Endpunkte erfordern keine Authentifizierung. Können direkt ohne Token oder API-Schlüssel abgerufen werden.',
  api_public_path_params: 'Pfadparameter',
  api_public_request_body: 'Anfragekörper',
  api_public_response_200: 'Antwort — OK (200)',
  api_public_response_200_xml: 'Antwort — OK (200)',
  api_public_response_201: 'Antwort — Erstellt (201)',
  api_public_response_422: 'Antwort — Validierung fehlgeschlagen (422)',
  api_public_example: 'Beispiel',
  api_public_example_invalid: 'Beispiel — Ungültiges Dokument',
  api_public_example_refresh: 'Beispiel — Refresh Token',
  api_public_quick_ref: 'Schnellreferenz',

  // Public health
  api_public_health_title: 'Gesundheitsprüfung',
  api_public_health_desc: 'Gibt Server-Status und Version zurück. Keine Authentifizierung erforderlich.',
  api_public_health_field_status: '"ok" oder "degraded"',
  api_public_health_field_version: 'Semantische Versionszeichenkette',

  // Public ready
  api_public_ready_title: 'Bereitschaftsprüfung',
  api_public_ready_desc: 'Gibt zurück, ob der Server bereit ist, Anfragen entgegenzunehmen. Nützlich für Load Balancer und Container-Orchestrierung.',
  api_public_ready_field_ready: 'true, wenn der Server bereit ist, Anfragen zu empfangen',

  // Public register
  api_public_register_title: 'Neuen Benutzer registrieren',
  api_public_register_desc: 'Ein neues Benutzerkonto mit E-Mail, Passwort, Name und Mandant erstellen. Keine Authentifizierung erforderlich.',
  api_public_register_content_type: 'Content-Type:',
  api_public_register_field_email: 'E-Mail-Adresse des Benutzers',
  api_public_register_field_name: 'Vollständiger Name des Benutzers',
  api_public_register_field_password: 'Passwort, mindestens 8 Zeichen',
  api_public_register_field_tenant: 'Mandant-Bezeichner',
  api_public_register_resp_id: 'Eindeutiger Bezeichner des Benutzers',
  api_public_register_resp_email: 'E-Mail des Benutzers',
  api_public_register_resp_name: 'Name des Benutzers',
  api_public_register_resp_tenant: 'Mandant-Bezeichner',
  api_public_register_resp_created: 'Erstellungszeitstempel (ISO 8601)',

  // Public token
  api_public_token_title: 'Zugriffstoken abrufen',
  api_public_token_desc: 'Authentifizieren und ein JWT-Zugriffstoken erhalten. Unterstützt die Grant-Typen "password" und "refresh_token".',
  api_public_token_content_type: 'Content-Type:',
  api_public_token_field_grant: '"password" oder "refresh_token"',
  api_public_token_field_email: 'E-Mail-Adresse (bei Grant-Typ "password")',
  api_public_token_field_password: 'Passwort (bei Grant-Typ "password")',
  api_public_token_field_refresh: 'Refresh Token (bei Grant-Typ "refresh_token")',
  api_public_token_resp_access: 'JWT-Zugriffstoken',
  api_public_token_resp_type: '"Bearer"',
  api_public_token_resp_expires: 'Ablaufzeit in Sekunden',
  api_public_token_resp_refresh: 'Token zum Erneuern des Zugriffstokens',

  // Public validate
  api_public_validate_title: 'XML-Dokument validieren',
  api_public_validate_desc: 'Ein Factura Electrónica XML-Dokument gegen das Schema validieren. Keine Authentifizierung erforderlich.',
  api_public_footnote_required: '* Erforderlich je nach Wert von <code>grant_type</code>.',
  api_public_dev_warning: '<strong>⚠ Nur im Entwicklungsmodus verfügbar.</strong> Diese Endpoints sind in der Produktion nicht verfügbar.',
  api_public_validate_content_type: 'Content-Type:',
  api_public_validate_body_desc: 'Der Anfragekörper muss das XML-Dokument der Factura Electrónica enthalten.',
  api_public_validate_field_valid: 'true, wenn das XML gemäß dem Schema gültig ist',
  api_public_validate_field_errors: 'Liste der Validierungsfehler (leer bei Gültigkeit)',
  api_public_validate_422_desc: 'Wird zurückgegeben, wenn das XML-Dokument Validierungsfehler gegen das Schema enthält.',

  // Public mock endpoints
  api_public_mock_title: 'Mock-Endpunkte von Hacienda',
  api_public_mock_desc: 'Nur für Entwicklung bestimmte Mock-Endpunkte, die Hacienda-API-Antworten simulieren. Diese Endpunkte sind nur zum Testen und für die Entwicklung.',

  // Mock token
  api_public_mock_token_title: 'Mock: Hacienda-Token',
  api_public_mock_token_desc: 'Gibt ein Mock-Hacienda-Zugriffstoken zurück. Simuliert den echten Hacienda-OAuth-Ablauf für die lokale Entwicklung.',
  api_public_mock_token_field_type: '"bearer"',
  api_public_mock_token_field_access: 'Mock-Token von Hacienda',
  api_public_mock_token_field_expires: 'Ablaufzeit in Sekunden',

  // Mock submit
  api_public_mock_submit_title: 'Mock: Dokument übermitteln',
  api_public_mock_submit_desc: 'Simuliert die Dokumentenübermittlung an Hacienda. Gibt einen Schlüssel und einen Anfangsstatus zurück.',
  api_public_mock_submit_field_clave: 'Schlüssel des simulierten Dokuments',
  api_public_mock_submit_field_estado: 'Anfangsstatus der Übermittlung',

  // Mock status
  api_public_mock_status_title: 'Mock: Status überprüfen',
  api_public_mock_status_desc: 'Überprüft den Mock-Status eines zuvor übermittelten Dokuments.',
  api_public_mock_status_param_clave: 'Dokumentenschlüssel',
  api_public_mock_status_field_clave: 'Dokumentenschlüssel',
  api_public_mock_status_field_estado: 'Aktueller Status: "verarbeitet", "akzeptiert" oder "abgelehnt"',
  api_public_mock_status_field_mensaje: 'Nachricht von Hacienda',

  // Mock list
  api_public_mock_list_title: 'Mock: Belege auflisten',
  api_public_mock_list_desc: 'Gibt eine Liste der zuvor übermittelten Mock-Dokumente zurück.',
  api_public_mock_list_field_list: 'Liste der simulierten Belege',

  // Mock download
  api_public_mock_download_title: 'Mock: Beleg herunterladen',
  api_public_mock_download_desc: 'Lädt ein Mock-Dokument anhand des Schlüssels herunter. Gibt den XML-Inhalt der elektronischen Rechnung zurück.',
  api_public_mock_download_content_type: 'Content-Type:',
  api_public_mock_download_param_clave: 'Schlüssel des herunterzuladenden Dokuments',
  api_public_mock_download_resp_desc: 'Gibt das vollständige XML-Dokument des elektronischen Belegs zurück.',

  // Public references
  api_public_ref_health: 'Gesundheitsprüfung',
  api_public_ref_ready: 'Bereitschaftsprüfung',
  api_public_ref_register: 'Benutzer registrieren',
  api_public_ref_token: 'Zugriffstoken abrufen',
  api_public_ref_validate: 'XML-Dokument validieren',
  api_public_ref_mock_token: 'Mock: Hacienda-Token',
  api_public_ref_mock_submit: 'Mock: Dokument übermitteln',
  api_public_ref_mock_status: 'Mock: Dokumentenstatus',
  api_public_ref_mock_list: 'Mock: Belege auflisten',
  api_public_ref_mock_download: 'Mock: Beleg herunterladen',

  // Returns
  api_returns_branch: 'Gibt das Filialobjekt zurück.',
  api_returns_branch_list: 'Gibt eine Liste der mit dem Unternehmen verbundenen Filialen zurück.',
  api_returns_company_profile: 'Gibt das Unternehmensprofil des Mandanten zurück.',
  api_returns_pos: 'Gibt das Verkaufsstellen-Objekt zurück.',
  api_returns_pos_list: 'Gibt eine Liste der mit der Filiale verbundenen Verkaufsstellen zurück.',

  // Reports
  api_section_reports: 'Berichte',
  api_section_reports_desc: 'Analytische Abfragen zu Verkäufen, Steuern und Dokumenten. Alle Endpunkte akzeptieren Datumsparameter zur Zeitspannenfilterung.',

  // Reports (detail keys)
  api_reports_summary_title: 'Verkaufszusammenfassung',
  api_reports_summary_desc: 'Aggregierte Verkaufszusammenfassung für den angegebenen Zeitraum, einschließlich Gesamtverkäufe, Dokumentenanzahl, durchschnittlicher Belegbetrag und Steuersummen.',
  api_reports_period_title: 'Umsatz nach Zeitraum',
  api_reports_period_desc: 'Umsätze nach Zeitraum aufschlüsseln (Tag, Woche oder Monat). Nützlich für Trendanalysen.',
  api_reports_receiver_title: 'Umsatz nach Empfänger',
  api_reports_receiver_desc: 'Umsätze nach Empfänger/Kunde aufschlüsseln. Zeigt die besten Kunden nach Umsatz.',
  api_reports_activity_title: 'Umsatz nach Aktivität',
  api_reports_activity_desc: 'Umsätze nach CABYS-Aktivitätscode aufschlüsseln. Nützlich zum Verständnis, welche Produktkategorien den meisten Umsatz generieren.',
  api_reports_tax_title: 'Steuerübersicht',
  api_reports_tax_desc: 'Steuerübersicht mit IVA (Umsatzsteuer)-Aufschlüsselung nach Steuersatz. Zeigt steuerpflichtige Beträge, Steuerbeträge und Befreiungen.',
  api_reports_vouchers_title: 'Belege nach Status',
  api_reports_vouchers_desc: 'Anzahl der Dokumente, gruppiert nach ihrem Annahmestatus bei Hacienda.',
  api_reports_receiver_msg_title: 'Empfängernachrichten',
  api_reports_receiver_msg_desc: 'Nachrichten und Ablehnungsgründe von Empfängern und Hacienda. Zeigt, warum Dokumente abgelehnt wurden.',
  api_reports_response_ok: 'Antwort \u2014 OK (200)',
  api_reports_required_yes: 'Ja',
  api_reports_required_no: 'Nein',
  api_reports_param_start_date: 'Beginn des Berichtszeitraums (ISO 8601)',
  api_reports_param_end_date: 'Ende des Berichtszeitraums (ISO 8601)',
  api_reports_period_param_period: 'Granularität: <code>"day"</code>, <code>"week"</code> oder <code>"month"</code>. Standard: <code>"day"</code>',
  api_reports_receiver_param_limit: 'Maximale Anzahl der zurückzugebenden Empfänger. Standard: <code>20</code>',
  api_reports_receiver_msg_param_status: 'Nach Status filtern: <code>"rejected"</code> oder <code>"accepted"</code>',

  // Sidebar additions
  api_sidebar_health: 'Gesundheit',
  api_sidebar_protected: 'Geschützte Endpunkte',

  // Status codes
  api_status_200: '200 OK',
  api_status_201: '201 Erstellt',
  api_status_202: '202 Akzeptiert',

  // Submission statuses
  api_submission_status_accepted: 'Hacienda hat das Dokument akzeptiert. Der elektronische Schlüssel ist verfügbar.',
  api_submission_status_rejected: 'Hacienda hat das Dokument abgelehnt. Weitere Details finden Sie in der Antwortnachricht.',
  api_submission_status_pending: 'Die Übermittlung steht in der Warteschlange und wird verarbeitet.',
  api_submission_status_processing: 'Die Übermittlung wird an Hacienda übertragen.',
  api_submission_status_error: 'Beim Kommunizieren mit Hacienda ist ein Fehler aufgetreten. Die Übermittlung kann erneut versucht werden.',

  // Submissions
  api_submissions_title: 'Übermittlungen',
  api_submissions_description: 'Signierte Dokumente an Hacienda übermitteln und deren Status verfolgen.',
  api_submissions_status_table_title: 'Statustabelle',

  // Submit document field
  api_submit_document_field_document_id: 'Eindeutiger Bezeichner des signierten Dokuments, das an Hacienda übermittelt werden soll.',

  // Retry submission
  api_retry_submission_param_id: 'Eindeutiger Bezeichner der erneut zu übermittelnden Übermittlung.',

  // Webhooks
  api_webhooks_create_title: 'Webhook-Abonnement erstellen',
  api_webhooks_delete_title: 'Webhook-Abonnement löschen',
  api_webhooks_list_title: 'Webhook-Abonnements auflisten',
  api_webhooks_events_title: 'Verfügbare Ereignisse',
  api_webhooks_delivery_logs_title: 'Zustellungsprotokolle',
  api_webhooks_payload_example: 'Payload-Beispiel',
  api_webhooks_secret_warning: 'Wichtig:',
  api_webhooks_payload_signature_desc: 'Der Payload enthält einen <code>X-Fides-Signature</code>-Header mit der HMAC-SHA256-Signatur des Body unter Verwendung des <code>secret</code> des Webhooks.',

  // Webhooks (endpoint descriptions)
  api_webhooks_list_desc: 'Alle Webhook-Abonnements des authentifizierten Mandanten auflisten.',
  api_webhooks_response_200: 'Antwort — 200 OK',
  api_webhooks_response_201: 'Antwort — 201 Erstellt',
  api_webhooks_response_400: 'Antwort — 400 Fehlerhafte Anfrage',
  api_webhooks_response_401: 'Antwort — 401 Nicht Autorisiert',
  api_webhooks_response_404: 'Antwort — 404 Nicht Gefunden',
  api_webhooks_create_desc: 'Ein neues Webhook-Abonnement erstellen. Fides sendet HTTP POST-Anfragen an die angegebene URL, wenn abonnierte Ereignisse auftreten.',
  api_webhooks_create_param_url_desc: 'Die Callback-URL, an die Fides POST-Anfragen sendet, wenn Ereignisse auftreten.',
  api_webhooks_create_param_events_desc: 'Liste der zu abonnierenden Ereignistypen. Siehe <a href="#events">Verfügbare Ereignisse</a> für gültige Werte.',
  api_webhooks_create_param_active_desc: 'Ob der Webhook aktiv ist. Standard ist <code>true</code>.',
  api_webhooks_delete_desc: 'Ein Webhook-Abonnement dauerhaft löschen. Dies kann nicht rückgängig gemacht werden.',
  api_webhooks_delete_param_id_desc: 'Die eindeutige Kennung des zu löschenden Webhook-Abonnements.',
  api_webhooks_logs_desc: 'Zustellungsprotokolle für ein bestimmtes Webhook-Abonnement abrufen. Zeigt alle Versuche, Ereignisse an die Callback-URL zuzustellen.',
  api_webhooks_logs_param_id_desc: 'Die eindeutige Kennung des Webhook-Abonnements.',
  api_webhooks_logs_param_limit_desc: 'Maximale Anzahl der zurückzugebenden Protokolle. Standard ist <code>100</code>.',
  api_webhooks_events_desc: 'Die folgenden Ereignisse können beim Erstellen eines Webhooks abonniert werden:',
  api_webhooks_events_th_event: 'Ereignis',
  api_webhooks_events_th_desc: 'Beschreibung',
  api_webhooks_events_submitted: 'Dokument an Hacienda übermittelt',
  api_webhooks_events_accepted: 'Dokument von Hacienda akzeptiert',
  api_webhooks_events_rejected: 'Dokument von Hacienda abgelehnt',
  api_webhooks_events_cancelled: 'Dokument storniert',
  api_webhooks_events_format_desc: 'Wenn ein Ereignis ausgelöst wird, sendet Fides einen POST an die Webhook-URL mit diesem Format:',

  // Certificates (detailed)
  certificates_title: 'Zertifikate',
  certificates_description: 'Digitale Zertifikate für die XAdES-XML-Signatur verwalten.',
  certificates_list_title: 'Zertifikate auflisten',
  certificates_list_description: 'Gibt eine Liste aller für den aktuellen Mandanten registrierten digitalen Zertifikate zurück.',
  certificates_list_no_body: 'Dieser Endpunkt erfordert keinen Anfragekörper.',
  certificates_get_title: 'Zertifikat abrufen',
  certificates_get_description: 'Ruft die vollständigen Details eines bestimmten digitalen Zertifikats anhand seiner ID ab.',
  certificates_get_id_desc: 'Eindeutiger Bezeichner des Zertifikats',
  certificates_store_title: 'Zertifikat hochladen',
  certificates_store_description: 'Ein neues digitales Zertifikat im P12/PFX-Format hochladen. Die Datei muss den privaten Schlüssel und das vollständige Zertifikat der Kette enthalten.',
  certificates_store_content_type: 'Content-Type: multipart/form-data',
  certificates_store_file_desc: 'P12/PFX-Datei des digitalen Zertifikats',
  certificates_store_password_desc: 'Passwort der P12/PFX-Datei',
  certificates_store_alias_desc: 'Beschreibender Name für das Zertifikat. Wird weggelassen, wird er aus dem Subject Name generiert.',
  certificates_deactivate_title: 'Zertifikat deaktivieren',
  certificates_deactivate_description: 'Deaktiviert ein digitales Zertifikat (logische Löschung). Das Zertifikat wird nicht aus dem System entfernt, sondern als inaktiv markiert und kann nicht mehr zum Signieren von Dokumenten verwendet werden.',
  certificates_deactivate_id_desc: 'Eindeutiger Bezeichner des Zertifikats zum Deaktivieren',

  // Credentials (detailed)
  credentials_title: 'Anmeldedaten',
  credentials_description: 'Hacienda-API-Anmeldedaten für die Dokumentenübermittlung verwalten.',
  credentials_status_title: 'Anmeldedaten-Status',
  credentials_status_description: 'Prüft, ob Hacienda-Anmeldedaten für den aktuellen Mandanten konfiguriert sind. Gibt nicht die Anmeldedaten selbst zurück, nur ihren Konfigurationsstatus.',
  credentials_status_no_body: 'Dieser Endpunkt erfordert keinen Anfragekörper.',
  credentials_set_title: 'Anmeldedaten konfigurieren',
  credentials_set_description: 'Legt die Hacienda-API-Anmeldedaten fest. Die Anmeldedaten werden gegen den Identitätsanbieter (IDP) von Hacienda validiert, bevor sie gespeichert werden. Bei fehlgeschlagener Validierung werden die Anmeldedaten nicht gespeichert.',
  credentials_set_username_desc: 'Bei Hacienda registrierter Benutzer',
  credentials_set_password_desc: 'Passwort oder Passwort des privaten Schlüssels des Benutzers bei Hacienda',
  credentials_set_client_id_desc: 'OIDC-Client-Bezeichner, der bei Hacienda registriert ist',
  credentials_set_client_secret_desc: 'OIDC-Client-Geheimnis für die OAuth2-Authentifizierung',
  credentials_update_title: 'Anmeldedaten aktualisieren',
  credentials_update_description: 'Aktualisiert vorhandene Hacienda-Anmeldedaten. Nur die in der Anfrage enthaltenen Felder werden geändert. Die aktualisierten Anmeldedaten werden gegen den IDP von Hacienda validiert, bevor sie gespeichert werden.',
  credentials_update_username_desc: 'Neuer bei Hacienda registrierter Benutzer',
  credentials_update_password_desc: 'Neues Passwort oder Passwort des privaten Schlüssels',
  credentials_update_client_id_desc: 'Neuer OIDC-Client-Bezeichner',
  credentials_update_client_secret_desc: 'Neues OIDC-Client-Geheimnis',

  // --- Home page ---
  fides_hero_overline: 'Elektronische Rechnungsstellungs-API',
  fides_hero_subtitle: 'Zustandslose API für elektronische Rechnungsstellung bei Hacienda Costa Rica. Erstellen, signieren und senden Sie Dokumente mit 38 REST-Endpunkten.',
  fides_hero_cta_reference: 'API-Referenz',
  fides_hero_cta_mercurius: 'Mercurius-Dokumentation',
  fides_feature_all_docs_title: 'Alle Dokumenttypen',
  fides_feature_all_docs_desc: 'Vollständige Unterstützung für alle 7 elektronischen Dokumenttypen (FE, TE, NC, ND, REP, FEC, FEE) mit XML-Generierung und integrierter Validierung.',
  fides_feature_submissions_title: 'Hacienda-Übermittlung',
  fides_feature_submissions_desc: 'Asynchrone Übermittlung mit Job-Warteschlange. Automatische Wiederholungen und Echtzeit-Statusverfolgung.',
  fides_feature_pos_title: 'Verkaufsstelle',
  fides_feature_pos_desc: 'Verwaltung von Verkaufsstellen, Filialen und Unternehmen mit integriertem CABYS-Katalog.',
  fides_feature_reports_title: 'Berichte',
  fides_feature_reports_desc: 'Umsatzübersicht, Steuern, Quittungen nach Status und Empfängernachrichten.',
  fides_doc_types_title: 'Dokumenttypen',
  fides_doc_types_subtitle: 'Die 7 elektronischen Dokumenttypen, die von Hacienda für die elektronische Rechnungsstellung definiert wurden.',
  fides_doc_types_code: 'Code',
  fides_doc_types_name: 'Dokumenttyp',
  fides_doc_type_01: 'Elektronische Rechnung (FE)',
  fides_doc_type_02: 'Elektronisches Ticket (TE)',
  fides_doc_type_03: 'Gutschrift (NC)',
  fides_doc_type_04: 'Lastschrift (ND)',
  fides_doc_type_05: 'Elektronischer Zahlungsbeleg (REP)',
  fides_doc_type_06: 'Elektronische Kaufrechnung (FEC)',
  fides_doc_type_07: 'Elektronische Ausfuhrrechnung (FEE)',
  fides_cta_title: 'Bereit loszulegen?',
  fides_cta_subtitle: 'Erkunden Sie alle 38 API-Endpunkte und beginnen Sie in Minuten mit der Integration der elektronischen Rechnungsstellung.',
  fides_cta_button: 'API-Referenz',

  // --- Quick Reference ---
  qr_health_desc: 'Serverstatus',
  qr_ready_desc: 'Bereitschaftsprüfung',
  qr_token_desc: 'Zugriffstoken abrufen',
  qr_register_desc: 'Benutzer registrieren',
  qr_validate_desc: 'XML validieren',
  qr_change_password_desc: 'Passwort ändern',
  qr_revoke_token_desc: 'Token widerrufen',
  qr_list_documents_desc: 'Dokumente auflisten',
  qr_generate_document_desc: 'Dokument generieren',
  qr_document_status_desc: 'Dokumentstatus',
  qr_sign_document_desc: 'Dokument signieren',
  qr_cancel_document_desc: 'Dokument stornieren',
  qr_finalize_draft_desc: 'Entwurf abschließen',
  qr_create_draft_desc: 'Entwurf erstellen',
  qr_pending_drafts_desc: 'Ausstehende Entwürfe',
  qr_list_invoices_desc: 'Rechnungen auflisten',
  qr_create_invoice_desc: 'Rechnung erstellen',
  qr_get_invoice_desc: 'Rechnung abrufen',
  qr_list_submissions_desc: 'Sendungen auflisten',
  qr_submit_desc: 'An Hacienda senden',
  qr_submission_status_desc: 'Sendungsstatus',
  qr_retry_submission_desc: 'Sendung erneut versuchen',
  qr_get_company_desc: 'Unternehmen abrufen',
  qr_create_company_desc: 'Unternehmen erstellen',
  qr_company_by_id_desc: 'Unternehmen nach ID',
  qr_update_company_desc: 'Unternehmen aktualisieren',
  qr_list_branches_desc: 'Niederlassungen auflisten',
  qr_create_branch_desc: 'Niederlassung erstellen',
  qr_get_branch_desc: 'Niederlassung abrufen',
  qr_update_branch_desc: 'Niederlassung aktualisieren',
  qr_list_pos_desc: 'Kassensysteme auflisten',
  qr_create_pos_desc: 'Kassensystem erstellen',
  qr_get_pos_desc: 'Kassensystem abrufen',
  qr_update_pos_desc: 'Kassensystem aktualisieren',
  qr_list_certificates_desc: 'Zertifikate auflisten',
  qr_upload_certificate_desc: 'Zertifikat hochladen',
  qr_get_certificate_desc: 'Zertifikat abrufen',
  qr_deactivate_certificate_desc: 'Zertifikat deaktivieren',
  qr_credentials_status_desc: 'Anmeldedatenstatus',
  qr_configure_credentials_desc: 'Anmeldedaten konfigurieren',
  qr_update_credentials_desc: 'Anmeldedaten aktualisieren',
  qr_create_api_key_desc: 'API-Schlüssel erstellen',
  qr_list_api_keys_desc: 'API-Schlüssel auflisten',
  qr_revoke_api_key_desc: 'API-Schlüssel widerrufen',
  qr_sales_summary_desc: 'Umsatzübersicht',
  qr_sales_by_period_desc: 'Umsatz nach Zeitraum',
  qr_sales_by_receiver_desc: 'Umsatz nach Empfänger',
  qr_sales_by_activity_desc: 'Umsatz nach Aktivität',
  qr_tax_summary_desc: 'Steuerübersicht',
  qr_vouchers_by_status_desc: 'Belege nach Status',
  qr_receiver_messages_desc: 'Empfängernachrichten',
  qr_list_webhooks_desc: 'Webhooks auflisten',
  qr_create_webhook_desc: 'Webhook erstellen',
  qr_delete_webhook_desc: 'Webhook löschen',
  qr_delivery_logs_desc: 'Zustellungsprotokolle'
};
