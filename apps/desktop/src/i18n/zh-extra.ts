/**
 * zh-extra — Hermes 桌面端中文补全（本地补丁，非上游）
 *
 * 背景：官方 zh.ts 词典对约 129 条界面文案没有中文覆盖，切到中文后这些位置
 * 会回落英文（错误卡片、引导、免费通道、快捷键面板、定时任务等）。
 * 本文件把这些缺口补上，由 `zh.ts` 用 `mergeTranslations` **深合并**进官方词典
 * （禁止用 `{...zhOverrides, ...zhExtra}` 浅展开——那会整棵替换 boot / settings / sidebar 子树）。
 *
 * 同时承载本地面板类新增键的中文（`sidebar.filterMenu.*`、
 * `settings.customEndpoints.*` 补充项、`settings.model.moa*`）。
 *
 * 维护：升级 Hermes 后若上游补齐了某条，本文件对应项可删（重复无害，本文件覆盖官方）。
 * 清单来源：D:/hermes工作区/.alphaclaw/runtime/i18n-audit/20260921_汉化缺口清单.md
 */

import type { TranslationOverrides } from './define-locale'

export const zhExtra: TranslationOverrides = {
  // ── 侧栏筛选二级菜单（组件原为硬编码，本补丁接入 i18n） ──────────────────
  sidebar: {
    filterMenu: {
      aria: '筛选',
      grouping: '分组方式',
      ordering: '排序方式',
      show: '显示',
      filters: '筛选',
      status: '状态',
      pullRequest: '拉取请求',
      profile: '配置档案',
      project: '项目',
      groups: {
        date: '按更新时间',
        profile: '按配置档案',
        project: '按项目',
        status: '按状态'
      },
      orderings: {
        updated: '按更新时间',
        created: '按创建时间',
        status: '按状态',
        tokens: '按 Token 数',
        cost: '按费用',
        manual: '手动排序'
      },
      rowMeta: {
        updated: '更新时间',
        preview: '预览',
        tokens: 'Token 数',
        cost: '费用',
        pr: 'PR',
        profile: '配置档案'
      },
      pr: {
        open: '开放',
        draft: '草稿',
        merged: '已合并',
        closed: '已关闭',
        none: '无 PR'
      },
      statuses: {
        'needs-input': '等待输入',
        working: '工作中',
        unread: '未读',
        draft: '草稿',
        idle: '空闲'
      },
      inboxStyle: '收件箱样式',
      archived: '已归档',
      expandAll: '展开全部',
      collapseAll: '收起全部',
      resetToDefaults: '重置为默认'
    }
  },

  connectors: {
    checking: '正在检查你的应用…',
    waitingSignIn: '正在等待你完成登录…',
    notAvailable: '不可用',
    startWithout: '不连接直接开始'
  },

  boot: {
    errors: {
      openLogs: '打开日志',
      reconnectNow: '立即重连',
      connectionSettings: '连接设置',
      gatewaySignInRequiredDetail: '请重新登录以恢复连接。你的对话和设置都还在。',
      signInAgain: '重新登录',
      restartHermes: '重启 Hermes'
    },
    failure: {
      details: '详情'
    },
    causes: {
      exitedEarly: 'Hermes 的后台服务启动后立即退出了。',
      timedOut: 'Hermes 的后台服务未及时响应。',
      permission: 'Hermes 无法写入数据目录（权限问题）。',
      diskFull: '磁盘已满，Hermes 无法启动。',
      portInUse: '另一个程序占用了 Hermes 需要的网络端口。',
      installMissing: 'Hermes 的部分安装文件缺失。请选择「修复安装」把它补回来。'
    }
  },

  notifications: {
    errors: {
      storageFailure: 'Hermes 无法写入数据目录。请打开「维护」检查并修复。',
      restartHermesFailed: '无法重启 Hermes'
    },
    actions: {
      restartHermes: '重启 Hermes',
      openKeys: '打开密钥',
      openGateways: '打开网关',
      openMaintenance: '打开维护'
    }
  },

  keybinds: {
    actions: {
      'view.cycleSidebarGrouping': '切换会话分组方式',
      'view.toggleHud': '切换 HUD 模式',
      'hud.snapToPointer': '把 HUD 移到指针处（全局，HUD 打开时）',
      'view.newTerminal': '新建终端',
      'view.nextTerminal': '下一个终端',
      'view.prevTerminal': '上一个终端',
      'view.closeTerminal': '关闭终端'
    }
  },

  settings: {
    toolsets: {
      nousAuthFailedMessage: '请重试。',
      nousAuthTryAgain: '重试',
      postSetupOpenLogs: '打开日志',
      postSetupRunAgain: '再次运行',
      terminalBackend: {
        unavailableTitle: '终端命令不可用',
        openBackendSettings: '打开终端设置',
        useLocal: '使用本地',
        switchedToLocal: '终端命令现在在本地运行。对新会话生效。'
      }
    },
    customEndpoints: {
      name: '名称',
      providerId: '提供商 ID',
      providerIdPlaceholder: 'axet-proxy',
      endpointUrl: '端点地址',
      endpointUrlPlaceholder: 'http://127.0.0.1:8081/v1',
      apiMode: 'API 模式',
      defaultModel: '默认模型',
      defaultModelPlaceholder: 'gpt-5.4',
      context: '上下文',
      apiKey: 'API 密钥',
      apiKeyPlaceholderNew: '可选',
      apiKeyPlaceholderExisting: '留空则保留当前密钥',
      useForNewChats: '用于新对话',
      discoverModels: '发现可用模型',
      test: '测试',
      newEndpoint: '新建端点',
      editEndpoint: '编辑端点',
      addEndpoint: '新建端点',
      apiModeAuto: '自动检测',
      toastReachable: '端点可达。',
      toastReachableTransport: transport => `端点可达（已走 ${transport} 通道）。`,
      toastFoundModels: count => `发现 ${count} 个模型。`,
      toastValidationFailed: '端点校验失败。',
      toastValidationFailedTitle: '校验失败'
    },
    model: {
      moaSetDefault: '设为默认',
      moaAddPreset: '新增预设',
      moaAddReference: '添加参考模型',
      moaDefaultLabel: '默认：',
      auxStaleLead: (count, names) => `${count} 个辅助任务（${names}）仍运行在`,
      auxStaleOtherProviders: '其他提供商',
      auxStaleTail: '，而不是你的主模型。',
    }
  },

  skills: {
    hub: {
      viewScan: '查看扫描结果',
      openLog: '打开日志'
    }
  },

  messaging: {
    restartFailedManualDetail: '请再次点击重启；若仍失败，请打开日志并发送诊断。',
    restartAgain: '再次重启',
    openLogs: '打开日志'
  },

  webhooks: {
    webhookUrl: 'Webhook 地址'
  },

  cron: {
    lastRunFailed: '上次运行失败：',
    editJob: '编辑任务',
    runAgain: '再次运行',
    overdueSince: '已逾期：'
  },

  composer: {
    hiddenQueued: '设置提示'
  },

  updates: {
    connectionSettings: '连接设置',
    openDownloadPage: '打开下载页'
  },

  handoffTour: {
    profileTitle: '你的第一个任务跑在默认配置档案上',
    profileText:
      '这条竖栏用来切换配置档案。当前点亮的是默认档案——任务会话就在它下面。另一个是设置档案，欢迎对话在那里。',
    sessionsTitle: '每个配置档案各自保存会话',
    sessionsText:
      '这个列表属于默认配置档案。新建会话会在当前选中的配置档案里创建。在竖栏里切换配置档案，列表也会跟着换。',
    stayTitle: 'Hermes 就在一点之遥',
    stayText: '想要人帮忙时，切到设置档案并打开「欢迎使用 Hermes」即可。它一直留在那里。'
  },

  install: {
    probeErrorDetails: '详情',
    openLogs: '打开日志'
  },

  onboarding: {
    tryAgain: '重试',
    useApiKeyInstead: '改用 API 密钥',
    errorDetails: '详情'
  },

  freeTier: {
    busyHeading: '马上就好',
    unreachableBody: 'Hermes 连不上 Nous 服务，登录没能完成。请检查网络后重试。你的会话还在。',
    setupFailed: {
      gateClosed: '此版本的 Hermes 需要 Nous 账号才能启动。登录或注册一个即可——免费，只要一分钟。',
      paused: '免登录使用 Hermes 暂时暂停。Hermes 会继续重试。登录是免费的，马上就能继续。',
      unreachable: 'Hermes 连不上 Nous 服务。请检查网络后点「重试」，或先接入其他提供商。',
      serverError: 'Nous 服务出了一点小状况。稍后点「重试」，或先接入其他提供商。',
      powRequired: 'Nous 服务器要求工作量证明，但你的 Agent 尚未实现该功能。请登录或注册一个免费 Nous 账号以继续。',
      locked: '此会话必须登录后才能继续。请登录或注册一个免费 Nous 账号。',
      generic: 'Hermes 无法在未登录的情况下开通免费通道。登录是免费的，也可以先接入其他提供商。',
      signInBelow: '登录免费。请在下方选择 Nous。',
      tryAgain: '重试',
      retrying: '正在重试…'
    }
  },

  shell: {
    statusbar: {
      toggleFreeTier: '免费通道'
    }
  },

  prompts: {
    reconnect: '重新连接'
  },

  desktop: {
    handoff: {
      startMessaging: '开始用消息平台'
    }
  },

  errors: {
    boundaryDetails: '详情',
    sendDiagnostics: '发送诊断'
  },

  assistant: {
    thread: {
      errorLayerBodies: {
        auth: 'AI 服务拒绝了你当前的登录凭据。请检查该提供商的凭证，然后重新发送消息。',
        billing: '你的账号在该提供商已无可用余额。充值或更换提供商后重试。',
        disk: '磁盘已满，Hermes 无法保存这段对话。请腾出空间后重试。',
        endpoint: 'Hermes 连不上你的自定义模型服务。请确认它正在运行，然后重新发送。',
        gateway: 'Hermes 在开始回复时遇到内部问题。请重新发送；如果反复出现，请发送诊断。',
        generic: 'Hermes 回复时出了点问题。请重试；如果反复出现，可复制详情。',
        provider: 'AI 服务未能完成这次请求。稍后重试，或更换提供商。',
        runtime: 'Hermes 在开始回复时遇到内部问题。请重新发送；如果反复出现，请发送诊断。',
        streaming: '回复完成前连接中断了。请重试发送。'
      },
      errorCodes: {
        billing: { title: '余额不足' },
        rate_limit: { title: 'AI 服务繁忙' },
        upstream_rate_limit: { title: 'AI 服务繁忙' },
        overloaded: { title: 'AI 服务过载' },
        server_error: { title: 'AI 服务出错了' },
        timeout: { title: '回复超时' },
        stream_drop: { title: '回复被中断', body: '回复完成前连接中断了。请重试发送。' },
        upstream_blocked: { title: '请求被防火墙拦截' },
        ssl_cert_verification: { title: '安全连接失败' },
        context_overflow: {
          title: '这段对话太长了',
          body: '对话已超出模型可容纳的长度。请压缩对话或新建会话后再发送。'
        },
        payload_too_large: {
          title: '这条消息太大了',
          body: '请求超出模型上限。请压缩对话或新建会话后再发送。'
        },
        model_not_found: { title: '该模型不可用' },
        provider_policy_blocked: { title: '该模型被你的账号设置屏蔽' },
        content_policy_blocked: { title: 'AI 服务拒绝了这次请求' },
        format_error: { title: 'AI 服务拒绝了这次请求' },
        truncated: { title: '回复被截断', body: '模型没写完就停了。请重试以获得完整回复。' },
        invalid_response: { title: 'AI 服务返回了无法解析的回复' },
        empty_response: { title: 'AI 服务返回了空回复' },
        loop_error: {
          title: 'Hermes 陷入了循环',
          body: '回复不断重复同样的步骤，Hermes 已停止。请重试；若再次出现请新建会话。'
        },
        SESSION_NOT_OWNED: {
          title: '此对话正在别处打开',
          body: '这段对话正被另一个 Hermes 窗口或终端打开。请在那边关闭后重新发送，或在此新建会话。'
        },
        disk_full: { title: '磁盘已满', body: '磁盘已满，Hermes 无法保存这段对话。请腾出空间后重试。' },
        free_tier_disabled: {
          title: '免登录使用 Hermes 当前已关闭',
          body: '登录 Nous 账号即可继续对话，免费。'
        },
        free_tier_rate_limited: {
          title: '免登录对话额度已用完',
          body: '额度很快会恢复。登录 Nous 账号可获得更高额度，免费。'
        },
        free_tier_at_capacity: {
          title: '免登录通道当前非常繁忙',
          body: '登录即可跳过排队（免费），或稍后再试。'
        },
        free_tier_model_not_free: {
          title: '该模型不支持免登录使用',
          body: 'Hermes 目前使用免费模型。登录 Nous 账号可使用更多模型，免费。'
        },
        free_tier_route: {
          title: 'Hermes 无法在这条线路上连到免费模型',
          body: '登录 Nous 账号（免费），或检查 NOUS_INFERENCE_BASE_URL 设置。'
        },
        free_tier_outage: { title: '免费模型暂时无法响应', body: '请过一分钟再发送一次。' },
        free_tier_refused: { title: '未登录时 Hermes 无法发送这条消息', body: '登录 Nous 账号是免费的。' }
      },
      errorDetails: '详情',
      errorGenericProvider: 'AI 服务',
      errorToastTitle: 'Hermes 没能完成这次回复',
      errorChooseModel: '选择模型',
      errorCompressConversation: '压缩对话',
      errorCompressFailed: '无法压缩对话',
      errorOpenHermesFolder: '打开 Hermes 文件夹',
      errorOpenHermesFolderFailed: '无法打开 Hermes 文件夹',
      errorUpdateApiKey: '更新 API 密钥',
      errorSignInFreeTier: '使用 Nous 账号登录'
    },
    approval: {
      reconnect: '重新连接',
      timedOutSystemLine:
        '审批超时——命令未执行。可以让 Hermes 重试，或在「设置 → 安全 → 审批超时」中调高上限。',
      openSafetySettings: '打开安全设置'
    }
  }
}
