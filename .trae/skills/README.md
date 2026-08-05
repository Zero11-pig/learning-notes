# TRAE 个人 Skills 库

本目录存放用户自建的 TRAE 个人 Skill,按主题组织。

## 厚涂 / 苍狼系列 (Kok Boru & Impasto)

| Skill | 说明 |
|-------|------|
| `epic-impasto-character` | 史诗数字厚涂-人物版 V8.0(三渲二 × 苍狼国风,即梦优化) |
| `epic-impasto-scene` | 史诗数字厚涂-场景版 V7.0(霍特玛电影感) |
| `painterly-animation-style` | Kok Boru 苍狼风格通用生图框架 |
| `kokboru-core-style` | 苍狼核心风格模板(手绘停格油画) |
| `kokboru-character-aksakal` | 苍狼角色:老族长 AKSAKAL |
| `kokboru-character-ana` | 苍狼角色:女性 ANA |
| `kokboru-scene-winter-camp` | 苍狼冬季游牧营地场景 |
| `kokboru-scene-dream` | 苍狼梦境序列场景 |
| `kokboru-negative-prompts` | 苍狼负面提示词库 |

## 电影感提示词系列

| Skill | 说明 |
|-------|------|
| `cinematic-rack-focus-prompt` | 电影感视频提示词生成器(王家卫/诺兰/机甲,色卡锁定,Swatch Sheet) |
| `generate-cinematic-backdrop-prompts` | 电影感底图提示词生成(干净背景/KV/参考图锁定) |

## 安装说明

每个 Skill 为一个独立目录,内含 `SKILL.md`(含 YAML frontmatter:name + description)。
复制目录到 TRAE 的 skills 目录即可启用。

## 维护

- 新增 Skill:创建 `<skill-name>/SKILL.md`,frontmatter 必须包含 `name` 与 `description`
- description 需说明:(1) 功能 (2) 触发时机,便于模型识别调用
