import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
const projects = await readFile(new URL("../src/projects.js", import.meta.url), "utf8");

test("首页以 PORTFOLIO 为唯一主标题并突出个人信息", () => {
  assert.match(html, /<h1[^>]*>\s*PORTFOLIO\s*<\/h1>/);
  assert.doesNotMatch(html, /在系统与物件之间|编排叙事/);
  assert.match(html, /黎昕彤/);
  assert.match(html, /Li Xintong/);
  assert.match(html, /广州美术学院/);
  assert.match(html, /智能交互设计/);
  assert.match(html, /用户研究/);
});

test("首页包含项目、关于和联系方式", () => {
  assert.match(html, /id="about"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /id="contact"/);
});

test("首页列出七个真实项目且不使用生成图片", () => {
  assert.match(projects, /SportLoop/);
  assert.match(projects, /Versa 多功能空气炸锅/);
  assert.match(projects, /一袭戏服，一种人生/);
  assert.match(projects, /从凝视到亲吻/);
  assert.match(projects, /机械轨道与爬楼机器人/);
  assert.match(projects, /生长中的记忆/);
  assert.match(projects, /AIGC 商业海报实验/);
  assert.match(projects, /number: "07"/);
  assert.doesNotMatch(html + projects, /generated_images|unsplash|placeholder/i);
});

test("视觉系统使用真白底和克制的东方暗红点缀", () => {
  assert.match(css, /--paper:\s*#fff(?:fff)?;/);
  assert.match(css, /--ink:/);
  assert.match(css, /--accent:/);
  assert.doesNotMatch(css, /background:\s*var\(--red\)/);
  assert.match(css, /prefers-reduced-motion/);
});

test("页面具备基础可访问性", () => {
  assert.match(html, /href="#main"/);
  assert.match(html, /<main id="main"/);
  assert.match(html, /aria-label="主导航"/);
  assert.match(html, /aria-label="打开导航"/);
});
